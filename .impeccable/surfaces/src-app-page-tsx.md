---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/catalog/page.tsx"]
---

# Home surface

Scope: `/` (site home); the same world carries every route (catalog, product, cart, delivery, gallery, news, contacts). Visitor mode: Persuade — a procurement buyer must believe RTW holds real stock in Tashkent and act: open the catalog, add a batch to the cart, call or leave a request.

## Direction contract

THESIS: The product itself is the hero — live, viscous amber syrup flowing under the headline, so the first viewport shows what RTW sells before a word is read. Refuses the stock-photo hero with a red "Оставить заявку" button that every raw-materials supplier ships.

OWN-WORLD: Warm ink #120D08 and starch white #F6F4EE carry the page; syrup amber #F2A516 is the one action colour (buttons, price numerals on dark, selection), amber-deep #B86A06 for links on light. Unbounded for display, Golos Text for reading, tabular figures for every price. Large-radius photo panels (24–32px), full-bleed real photography from RTW's own library, no glass ornament, no stock icons as content.

STORY: The visitor sees the syrup and the claim "Крахмал и патока оптом", reads the wholesale prices running in the amber band, understands the three directions and six industries, trusts the warehouse and the 2015/300+ record, and acts: catalog, cart with a batch calculator, or a callback.

FIRST VIEWPORT: Full-height WebGL syrup field; transparent header over it (wordmark with amber drop, nav, phone, cart, amber "Оставить заявку"); bottom-left a three-line Unbounded headline at ~116px, a short lead, amber "Каталог и цены" and a phone button; bottom-right an ink stat panel 2015 / 300+ / 3. The amber price marquee starts at the fold.

FORM: Жидкое золото — direction pinned by the user ("Живая патока" chosen in the brief round); a pinned direction beats the roll, which was still taken and recorded. seed:55dbcc5db33dcb6a

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction and motion
- Syrup field: domain-warped flow drifting downward, cursor pulls the surface; pauses offscreen; one static frame under reduced motion; amber gradient fallback without WebGL.
- Headline words rise once (CSS, ends visible); price marquee; industries list swaps a photo on hover/focus; parallax warehouse in the about band; cards settle 8–24px on scroll with opacity held at 1.

## Unresolved
- Callback/lead delivery is log-only (TODO in src/app/api/callback/route.ts).
- Minimum batch for кислотная патока and ГФС awaits the owner's confirmation.
