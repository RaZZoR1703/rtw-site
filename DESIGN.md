---
name: RTW / Right To Win
description: Wholesale starch, molasses and technical chemistry from the Tashkent warehouse, staged as liquid amber on warm ink.
colors:
  ink: "#120d08"
  ink-2: "#251c13"
  starch: "#f6f4ee"
  starch-2: "#ebe6da"
  card-white: "#ffffff"
  amber: "#f2a516"
  amber-bright: "#ffb52e"
  amber-deep: "#b86a06"
  text-soft: "#5b5146"
  brand-red: "#d7262e"
  stock-green-bg: "#e7f4ea"
  stock-green-text: "#1d6b34"
  stock-green-dot: "#1d9b4a"
typography:
  display:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(2.75rem, 8.4vw, 7.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  display-page:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(2.4rem, 6.2vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline-product:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline-panel:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(1.85rem, 3.6vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title-display:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Golos Text, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.375
  price-hero:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontFeature: "\"tnum\""
  price:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontFeature: "\"tnum\""
  lead:
    fontFamily: "Golos Text, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Golos Text, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Golos Text, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  field: "16.8px"
  tile: "21.6px"
  card: "24px"
  panel: "26.4px"
  feature: "28px"
  stage: "32px"
  pill: "9999px"
spacing:
  gutter-sm: "16px"
  gutter: "32px"
  gap: "20px"
  card-pad: "24px"
  panel-pad: "28px"
  panel-pad-lg: "48px"
  heading-to-content: "56px"
  section: "96px"
  section-lg: "128px"
  container: "1280px"
components:
  button-amber:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 28px"
  button-amber-hover:
    backgroundColor: "{colors.amber-bright}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.starch}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  button-ink-hover:
    backgroundColor: "{colors.ink-2}"
  button-ghost:
    backgroundColor: "rgb(255 255 255 / 0.1)"
    textColor: "{colors.starch}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 20px"
  filter-bar:
    backgroundColor: "{colors.starch-2}"
    rounded: "{rounded.pill}"
    padding: "6px"
  filter-pill:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 20px"
  filter-pill-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.starch}"
  product-card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  stock-pill:
    backgroundColor: "{colors.stock-green-bg}"
    textColor: "{colors.stock-green-text}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  add-to-cart:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "48px"
  input-light:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    height: "48px"
    padding: "0 16px"
  input-dark:
    backgroundColor: "rgb(255 255 255 / 0.1)"
    textColor: "{colors.starch}"
    rounded: "{rounded.field}"
    height: "48px"
    padding: "0 16px"
  batch-calculator:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.card-pad}"
  stat-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.amber}"
    rounded: "{rounded.panel}"
    padding: "24px 0"
  lead-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.starch}"
    rounded: "{rounded.stage}"
    padding: "{spacing.panel-pad-lg}"
  price-band:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    typography: "{typography.price}"
    padding: "20px 0"
---

# Design System: RTW / Right To Win

## Overview

**Creative North Star: "Liquid Amber"**

The product is the light source. Wholesale syrup, molasses and starch are rendered as a warm, viscous amber that flows under the first viewport and then condenses into the one action colour of the whole site. Everything else is two grounds: a warm near-black ink for weight and night, and a starch white for reading and pricing. Pages alternate between the two in broad, full-width bands, so a scroll reads as ink, starch, ink, starch, with the amber price band stitched in at the fold.

Density is generous at the section level and tight inside the information that matters: price per kilogram, minimum batch and availability are set large, tabular and close together on every card and product page. Photography is real and full-bleed, darkened on ink grounds and object-cover inside large, soft-cornered panels; it never sits on a plate inside another plate. Motion is slow and settling (a long ease-out curve on everything), arrives once, and always ends with content visible.

The world refuses the raw-materials-supplier default: a stock-photo hero with a red "leave a request" button, glass ornament, eyebrow labels and numbered sections.

**Key Characteristics:**
- Two grounds (ink and starch) in alternating full-width bands; amber is the single action and price-highlight colour.
- Unbounded display at extreme sizes with tight negative tracking; Golos Text for everything read.
- Tabular figures on every price, quantity, phone number and count.
- Large-radius photo panels (22–32px) and full-pill controls; nothing square, nothing sharp.
- A live WebGL syrup field as the home hero; darkened full-bleed photo heroes on every inner page.
- One long ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)) for entrances, hovers and swaps.

## Colors

A warm duotone of ink and starch, lit by a single syrup amber.

### Primary
- **Syrup Amber** (amber): the one action colour. Primary buttons, add-to-cart discs, the price marquee band, cart count badge, text selection, and price/stat numerals on ink grounds. Ink text on amber measures 9.36:1; amber numerals on ink measure the same, 8.11:1 on the lifted ink-2.
- **Bright Amber** (amber-bright): hover state of every amber control only (ink on it 10.95:1). Never a resting fill.
- **Deep Amber** (amber-deep): the amber that can sit on light ground, used for focus outlines, the text caret, the scrollbar thumb, inline icons on white cards, and hover tint on display-size links (phone numbers, card titles). On starch it measures only 3.74:1 (4.12:1 on white), so it is a large-text, icon and hover colour, not a resting colour for body-size link text.

### Neutral
- **Warm Ink** (ink): page text on light (17.57:1 on starch, 19.32:1 on white), and the dark ground for heroes, the industries band, about band, lead panel, cart summary, footer, dialogs' header, mobile menu, and the selected filter pill.
- **Lifted Ink** (ink-2): hover state of ink buttons and the fill of country chips on ink grounds; starch on it measures 15.22:1.
- **Starch White** (starch): the page ground and the text colour on ink (17.57:1). On ink, secondary text steps down by opacity: 85% and 75% for leads (12.68:1, 9.98:1), 70% and 65% for supporting copy (8.83:1, 7.69:1), 60% for breadcrumbs and captions (6.72:1), 50% as the floor for small labels (4.93:1).
- **Sack Linen** (starch-2): recessed ground behind filter bars, image wells, empty states, the calculator steppers and the no-minimum calculator variant. Ink on it 15.52:1, soft text 6.22:1.
- **Card White** (card-white): the raised surface for product cards, calculator, contact and payment cards, and light form fields, always with a hairline ink ring at 8–15%.
- **Soft Brown Text** (text-soft): secondary text on light grounds: card origin lines, minimum batch, field labels, section leads (7.04:1 on starch, 7.75:1 on white, 6.22:1 on starch-2).

### Status
- **Brand Red** (brand-red): reserved for errors on light grounds and the remove-from-cart hover. 4.54:1 on starch, 4.99:1 on white. On ink grounds errors switch to amber.
- **In-Stock Green** (stock-green-bg with stock-green-text and stock-green-dot): the "В наличии" pill on product photos. Text on the pill 5.78:1.

### Named Rules
**The One Amber Rule.** Amber marks what you can press or what something costs, nothing else. No amber section washes except the price band, no amber decoration.

**The Two Grounds Rule.** Every section sits on ink or on starch at full width; there is no third tinted section ground. starch-2 and white are surfaces inside a starch section, never section grounds.

**The Opacity Ladder Rule.** Secondary text on ink is starch at a stated opacity, never a new grey, and never below 50% for text.

## Typography

**Display Font:** Unbounded (sans-serif fallback), weights 600–900
**Body Font:** Golos Text (sans-serif fallback), weights 400–700

**Character:** Unbounded is wide, round and loud, a poster face that reads like the pour itself; Golos Text is a calm, Cyrillic-native workhorse that keeps prices, minimums and terms easy to scan on a phone.

### Hierarchy
- **Display** (800, clamp(2.75rem, 8.4vw, 7.25rem), 0.95): the home hero headline only, three stacked lines, each word clipped in its own overflow mask for the rise.
- **Display Page** (800, clamp(2.4rem, 6.2vw, 5rem), 0.98): the H1 on every inner page hero.
- **Headline** (700, clamp(2rem, 4.6vw, 3.75rem), 1.02): every section H2, balanced, max ~3xl measure. One word may be picked out in amber on ink grounds.
- **Headline Product / Panel** (700, clamp(2rem, 4.2vw, 3.25rem) and clamp(1.85rem, 3.6vw, 3rem)): product H1 beside the photo; the H2 inside the lead panel.
- **Title Display** (700, 30px): Unbounded titles on photo tiles (directions) and industry names (24–30px, 600).
- **Title** (Golos 600, 18px, 1.375): product names on cards, FAQ questions (18–20px).
- **Price** (Unbounded 700, 28px, tabular): card prices; the price band uses 24px; the product page uses **Price Hero** (800, 48px). The unit ("сум/кг") always drops to Golos 14–18px in text-soft beside the numeral.
- **Lead** (Golos 400, 18–20px, 1.625): section and hero leads, max ~42rem.
- **Body** (Golos 400, 16px, 1.625): running copy, accordion answers, card descriptions at 15px.
- **Label** (Golos 500, 14px): field labels, footer column heads, meta lines; 12–13px is the floor (header utility strip, consent line).

### Named Rules
**The Tabular Rule.** Every price, quantity, count, phone number and year is set with tabular figures. A number that can change or be compared never uses proportional digits.

**The Unit Steps Down Rule.** A price numeral is Unbounded; its unit is Golos, smaller and in text-soft. Never set the unit in the display face.

**The No Eyebrow Rule.** Headings stand alone. Nothing small, uppercase or tracked sits above a heading to introduce it; context goes in the lead under it.

## Layout

A single centred container (1280px) with 16px gutters on mobile and 32px from the small breakpoint up. Sections are full-bleed bands with vertical padding of 96px, rising to 128px at large screens (the parallax about band goes to 144px). Section heading to content is 48–56px; grids use a 20px gap. Section headings are a split row on desktop: H2 and lead left, one ink pill action right-aligned to the baseline.

Grids are simple and asymmetric where they pair text with image: 1.1fr / 1fr, 1fr / 1.05fr, 0.9fr / 1.1fr. Product grids run 1 / 2 / 3 columns. The home stock rail breaks the container: a horizontal snap-scroll strip of 340px cards whose first card aligns to the container edge, scrollbar hidden. The filter bar scrolls horizontally on mobile with the same hidden scrollbar.

Every inner page opens with a page hero: full-bleed photo, ink gradient from the left, breadcrumbs, Display Page H1 and a lead, padded 128px top (176px on large) to clear the fixed header. Every content route ends in the lead panel before the footer.

**The One Step From A Call Rule.** Every screen carries a phone number or a callback trigger within reach: the header phone and "Оставить заявку", and the closing lead panel with all phone numbers.

## Elevation & Depth

The system is flat. Depth comes from ground changes (ink against starch), hairline rings (ink at 8–15% on light, white at 10–25% on dark) and photography darkened by gradient, not from shadows. The only shadow is a 1px hairline under the solid header. The only blur is the solid header's backdrop blur; it is functional (content scrolling beneath a sticky bar), not ornament.

### Shadow Vocabulary
- **Header hairline** (`box-shadow: 0 1px 0 rgb(18 13 8 / 0.08)`): under the solid header once the page scrolls or on inner pages.
- **Button focus halo** (`outline: 2px solid amber; outline-offset: 2px; box-shadow: 0 0 0 2px ink`): every button's focus-visible state; reads on light, amber and ink grounds.

### Named Rules
**The Ring Not Shadow Rule.** Raised surfaces are separated by a hairline ring and a ground change. No drop shadows on cards, panels or buttons.

**The No Glass Rule.** No translucent frosted panels. The sticky header is the single backdrop-blur in the system.

## Shapes

Soft, large corners on everything that holds a photo or a panel, and full pills on everything you press or toggle. The panel radii step with size: 21.6px for small image tiles, icon tiles and mobile inline photos (gallery tiles 22px); 24px for product, contact and payment cards; 26.4px for the calculator, dialogs and the hero stat panel; 28px for direction tiles, industry photo, news cards, cart summary and empty states; 32px for the biggest stages (lead panel, product photo). Form fields take 16.8px. Buttons, filter pills, chips, badges, header icon buttons and the add-to-cart disc are full pills or circles. Ordered step markers are 48px circles.

**The Pill Or Panel Rule.** There are two shapes: the pill for controls and the soft panel for content. No square corners, no small 4–8px radii on visible surfaces.

## Components

### Buttons
Confident, tall, full-pill, semibold Golos, colour-swap on hover in 200–300ms with no lift.
- **Shape:** full pill (9999px). Heights 56px (hero), 48px (forms, calculator, section actions, empty states), 44px (header, dialog triggers).
- **Amber:** amber fill, ink text, 28px horizontal padding at hero size; hover to amber-bright. Used for the primary action of a region only ("Каталог и цены", "Оставить заявку", submit, "В корзину").
- **Ink:** ink fill, starch text; hover to ink-2. Secondary actions on light ("Весь каталог", "Получить прайс", "Уточнить"). On the hero, the ink phone button carries a white 20% ring.
- **Ghost:** white 10% fill, starch text, white 25% ring; hover white 20%. Only on ink or photo grounds.
- **Trailing arrow:** an arrow icon nudges 4px right on hover (300ms).
- **Focus:** the button focus halo (see Elevation).

### Chips
- **Filter bar:** a starch-2 pill track with 6px inset holding 44px pills; unselected pills are ink text that turn white on hover; the selected pill is solid ink with starch text, and its count turns amber (counts are tabular, text-soft when unselected).
- **Category tag:** white 90% pill with ink text and ink 10% ring, top-left on the product photo.
- **In-stock pill:** stock-green-bg pill, stock-green-text label with a stock-green-dot, top-right on the product photo.
- **Country chips:** ink-2 pills with white 15% ring and Unbounded 18px text on ink.
- **Illustration label:** a small ink pill reading "Иллюстрация" in starch 80%, bottom-left of any illustrative stock photograph.

### Cards / Containers
- **Product card:** white, 24px radius, ink 8% ring, overflow hidden. A 4:3 object-cover photo on a starch-2 well, edge to edge with no inner plate, carrying the category tag and in-stock pill; then 24px padding with Golos title (hover to amber-deep, whole card clickable), origin line in text-soft, and a bottom row of Unbounded price with "сум/кг", minimum batch below, and the 48px amber add disc (turns ink with amber icon once in the cart; shows a check for 1.6s after adding). Positions without a minimum show an ink "Уточнить" pill instead.
- **Direction tile:** ink 28px panel at 4:5, full-bleed photo with an ink bottom-up gradient, Unbounded title, amber count, and a 48px ink arrow disc top-right that floods amber on hover.
- **Info cards:** white 24px cards with 28px padding and ink 8% ring (contacts, payment).
- **Panels on ink:** ink 26.4–28px panels with white 10% ring (hero stat panel, cart summary, contacts form).
- **Shadow strategy:** none; see Elevation.

### Inputs / Fields
- **Light:** white fill, 48px tall, 16.8px radius, no border, ink 15% ring, 16px text; labels 14px medium in text-soft above.
- **Dark:** white 10% fill, starch text, starch 50% placeholder, white 15% ring; labels starch 80%.
- **Focus:** global 2px deep-amber outline at 3px offset; caret is deep amber.
- **Error:** a role=alert line below the fields in brand-red on light, amber on dark; the phone field is marked invalid.

### Navigation
- **Header:** fixed. Over the home hero it is transparent with starch text, white 15% dividers and white 10–20% icon discs; after 24px of scroll and on every inner page it turns solid starch at 90% with backdrop blur, the header hairline and ink text. A 13px utility strip (warehouse and company lines) sits above a 64/72px main row: wordmark with amber drop, nav pills (15px medium, active page is a solid ink pill, or white 15% over the hero), phone with tabular figures, 44px cart disc with an amber tabular count badge, and the amber "Оставить заявку".
- **Mobile:** a right-side sheet on solid ink: Unbounded 20px links separated by white 10% rules, the active one in amber, the phone in Unbounded 24px at the bottom and a full-width amber callback.
- **Footer:** ink, four columns, 14px starch-50% column heads, hover to amber, phone numbers in Unbounded.

### Syrup Field (signature)
The home hero is a full-height WebGL2 canvas rendering a domain-warped amber flow drifting downward, pulled by the pointer. It pauses when offscreen (intersection observer), draws a single static frame under reduced motion, and falls back to a radial amber-to-ink gradient when WebGL2 is unavailable. An ink gradient rises over the lower half so the bottom-left headline and the ink stat panel (2015 / 300+ / 3 in amber Unbounded numerals) stay legible.

### Price Band
A full-width amber marquee directly under the hero: product short name in Golos 17px semibold, price in Unbounded 24px tabular, "сум/кг" at ink 70% (5.04:1), separated by small ink-40% dots; 48s loop, pauses on hover, each item links to its product.

### Batch Calculator
A white 26.4px panel with ink 10% ring on the product page. Minus and plus 48px starch-2 discs around a tabular Unbounded 20px quantity field on starch. The step is 100kg when the minimum is 100kg or more, otherwise 25kg; values below the minimum are clamped up to it and minus disables at the minimum, with the rule stated in text-soft beneath. A ruled total row shows the Unbounded 30px sum (aria-live). Actions: amber "В корзину" and ink "Получить прайс". Without a known minimum, it becomes a starch-2 panel that hands off to a callback.

### Industries List
On ink: a ruled list of Unbounded industry names at starch 55% that brighten on hover; hover, focus or tap makes one active, expands its description with a grid-row reveal (500ms), and cross-fades the 4:5, 28px photo on the right from 1.06 scale to rest (700ms). On mobile the photo appears inline inside the expanded item.

### Lead Panel and Dialog
- **Lead panel:** a 32px ink stage split photo / form, the photo fading into ink toward the form; Headline Panel H2, dark lead form, then phones, email and address on a white 10% rule.
- **Callback dialog:** 26.4px starch dialog with an ink header band (Unbounded 24px "Перезвоним") over a compact light lead form.

### FAQ Accordion
Ink 12% rules, 18–20px semibold questions with 24px vertical padding, answers in 16px text-soft; the first item opens by default. Paired with a large tabular phone link on the left.

### Gallery
A dense grid of 22px tiles (220px rows, 260px at large) with captions on an ink bottom gradient; image zooms to 1.06 on hover. Opens an ink lightbox with object-contain imagery, caption, and 44px white-10% prev/next discs.

### Motion
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1) for all entrances, image zooms, reveals and swaps.
- **Hero entrance:** pure CSS so it runs before hydration; headline words rise from 105% inside their masks over 900ms, staggered 110ms; leads, buttons and the stat panel rise 18px with opacity ending at 1. Disabled under reduced motion.
- **Scroll settle:** tiles and list items settle 8–24px into place once on entering view, opacity held at 1 throughout, so nothing is ever hidden waiting for JavaScript.
- **Hover zoom:** photos scale to 1.06–1.07 over 900ms (cards, gallery) or 1200ms (direction tiles).
- **Parallax:** the about band's photograph drifts −10% to 10% across the scroll.
- **Reduced motion:** the motion library honours the user setting globally; smooth scrolling and CSS entrances switch off; the syrup field freezes to one frame.

## Do's and Don'ts

### Do:
- **Do** keep amber for actions, prices on ink and the price band; hover amber to amber-bright, never to a darker amber.
- **Do** set every price, minimum, count and phone in tabular figures, with the unit stepped down to Golos in text-soft.
- **Do** put real photography full-bleed inside 22–32px panels, object-cover, darkened with an ink gradient wherever text sits on it.
- **Do** label any stock or illustrative photograph that sits near a claim about RTW's own warehouse or stock with the "Иллюстрация" pill.
- **Do** end every entrance animation visible: hold opacity at 1 and animate position only, and freeze or skip motion under reduced motion.
- **Do** separate surfaces with hairline rings and ground changes rather than shadows.
- **Do** keep starch text on ink at 50% opacity or higher, and keep deep amber off body-size resting text.

### Don't:
- **Don't** add glass, frosted panels or backdrop blur anywhere except the sticky header.
- **Don't** place an eyebrow or kicker label above a heading, and don't number sections.
- **Don't** set a product photo on a matte plate inside another plate; the photo fills its panel.
- **Don't** show a stock warehouse photograph beside the Tashkent-stock claim without the "Иллюстрация" label.
- **Don't** introduce a third section ground colour or tint sections with amber, apart from the price band.
- **Don't** use square or small-radius corners on visible surfaces, or drop shadows on cards and buttons.
- **Don't** use the red as an action colour; brand-red is for errors only.
