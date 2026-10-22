"use client";

import { useEffect, useRef } from "react";

const VERT = `#version 300 es
in vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }`;

// Viscous amber surface: domain-warped fbm as a height field, lit with screen-space normals.
const FRAG = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uPull;
out vec4 outColor;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = r * p * 2.02 + 3.1; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y) * 0.72;
  float t = uTime * 0.045;

  // slow downward drift, like syrup running off a ladle
  p.y += t * 0.9;

  vec2 m = vec2(uMouse.x * aspect, uMouse.y) * 0.72;
  m.y += t * 0.9;
  float md = distance(p, m);
  float pull = uPull * exp(-md * md * 14.0);
  p += (m - p) * pull * 0.22;

  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p + 2.2 * q + vec2(1.7, 9.2) + t * 1.4), fbm(p + 2.2 * q + vec2(8.3, 2.8) - t * 1.1));
  float h = fbm(p + 1.8 * r);
  h += pull * 0.18;

  vec3 n = normalize(vec3(-dFdx(h) * 150.0, -dFdy(h) * 150.0, 1.0));
  vec3 L = normalize(vec3(-0.45, 0.55, 0.75));
  vec3 V = vec3(0.0, 0.0, 1.0);
  float diff = clamp(dot(n, L), 0.0, 1.0);
  float spec = pow(clamp(dot(reflect(-L, n), V), 0.0, 1.0), 26.0);
  float rim = pow(1.0 - n.z, 2.0);

  vec3 deep = vec3(0.30, 0.12, 0.01);
  vec3 honey = vec3(0.74, 0.38, 0.03);
  vec3 amber = vec3(0.98, 0.64, 0.10);
  vec3 gold = vec3(1.0, 0.86, 0.50);
  float k = smoothstep(0.2, 0.8, h);
  vec3 col = mix(deep, honey, smoothstep(0.0, 0.45, k));
  col = mix(col, amber, smoothstep(0.35, 0.8, k));
  col = mix(col, gold, smoothstep(0.78, 1.0, k) * 0.7);

  col *= 0.7 + 0.6 * diff;
  col += amber * rim * 0.35;
  col += vec3(1.0, 0.93, 0.78) * spec * 1.1;

  // keep the left and bottom calm for the headline
  float shade = smoothstep(1.1, 0.15, uv.x * 0.9 + (1.0 - uv.y) * 0.55);
  col = mix(col, deep * 0.55, (1.0 - shade) * 0.6);
  float vig = smoothstep(1.25, 0.35, distance(uv, vec2(0.62, 0.55)));
  col *= mix(0.7, 1.0, vig);

  outColor = vec4(pow(col, vec3(0.95)), 1.0);
}`;

export function SyrupCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2", {
      antialias: false,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");
    const uPull = gl.getUniformLocation(prog, "uPull");

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mouse = { x: 0.7, y: 0.5, tx: 0.7, ty: 0.5, pull: 0, tpull: 0 };
    let raf = 0;
    let visible = true;
    let start = performance.now() - 40000;

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.6;
      const w = Math.max(1, Math.round(canvas.clientWidth * scale));
      const h = Math.max(1, Math.round(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const draw = (now: number) => {
      resize();
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      mouse.pull += (mouse.tpull - mouse.pull) * 0.03;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uPull, mouse.pull);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      draw(now);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = 1 - (e.clientY - r.top) / r.height;
      mouse.tpull = 1;
    };
    const onLeave = () => (mouse.tpull = 0);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    const parent = canvas.parentElement ?? canvas;
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", resize);

    if (reduce) {
      start = performance.now() - 40000;
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(loop);
    }
    canvas.dataset.ready = "true";

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={className}
      style={{
        background:
          "radial-gradient(120% 90% at 70% 45%, #f2a516 0%, #b86a06 38%, #4a2203 70%, #120d08 100%)",
      }}
    />
  );
}
