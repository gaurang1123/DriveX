# Design System Document: The Kinetic Noir

## 1. Overview & Creative North Star
This design system is built upon the "Kinetic Noir" philosophy. It is an editorial-first approach that prioritizes high-velocity aesthetics, precision engineering, and atmospheric depth. Unlike traditional rental platforms that focus on utility and density, this system treats the digital interface like a high-end luxury watch or a premium automotive configurator.

**Creative North Star: The Digital Curator**
We do not simply "list" cars; we curate experiences. The UI must feel like a dark, silent showroom where the vehicles are the only source of light. We break the "template" look through:
- **Intentional Asymmetry:** Off-center typography and overlapping car silhouettes to create movement.
- **Atmospheric Depth:** Using layered dark tones instead of rigid lines to guide the eye.
- **Cinematic Contrast:** Tight, technical typography paired with expansive, high-contrast imagery.

---

## 2. Colors & Tonal Depth
The palette is rooted in deep obsidian tones, punctuated by high-energy "Electric Amber" accents that mimic the glow of premium instrumentation.

### The "No-Line" Rule
To maintain a premium, seamless feel, **1px solid borders are strictly prohibited** for sectioning. Boundaries must be defined through background color shifts or tonal transitions. Use `surface-container-low` (#1C1B1B) to define a section against the `background` (#131313) rather than a stroke.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of glass and carbon fiber. 
- **Lowest Tiers:** Use `surface_container_lowest` (#0E0E0E) for the deep background.
- **Interactive Tiers:** Use `surface_container` (#201F1F) or `surface_container_high` (#2A2A2A) for cards and modals.
- **Nesting:** When placing a container inside another, always move one step "up" or "down" the tier scale to create natural separation without needing shadows.

### The "Glass & Gradient" Rule
- **Glassmorphism:** Floating elements (e.g., sticky navigation, filter bars) must use a semi-transparent `surface_variant` with a 20px-40px backdrop-blur.
- **Signature Textures:** Main CTAs should not be flat. Use a subtle linear gradient from `primary` (#FFC880) to `primary_container` (#F5A623) at a 135-degree angle to simulate a metallic, anodized finish.

---

## 3. Typography
The typography system uses a high-contrast pairing: **Space Grotesk** for technical authority and **Manrope** for modern, Swiss-style legibility.

- **Display & Headlines (Space Grotesk):** Engineered and geometric. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections to convey a "fast" brand personality.
- **Body & Labels (Manrope):** Clean and functional. `body-lg` (1rem) is the standard for descriptive text.
- **Hierarchy as Identity:** Use `on_surface_variant` (#D7C3AE) for labels to create a sophisticated, muted secondary layer that allows the primary headers and car names to pop in pure White (#FFFFFF).

---

## 4. Elevation & Depth
Hierarchy is achieved through **Tonal Layering** rather than traditional structural dividers.

- **The Layering Principle:** Depth is created by stacking surface tiers. A `surface_container_highest` (#353534) card sitting on a `surface_container_low` (#1C1B1B) section provides a soft, natural lift.
- **Ambient Shadows:** For floating "hero" elements, use extra-diffused shadows. 
    - *Blur:* 40px–60px.
    - *Color:* A tinted version of the background (#000000 at 40% opacity).
    - *Note:* Shadows should feel like ambient occlusion in a render, not a "drop shadow."
- **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use the `outline_variant` (#524534) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), 12px-16px (`xl`) border radius. Text in `on_primary` (#452B00).
- **Secondary:** Semi-transparent "Glass" style. `surface_variant` with 15% opacity and a `Ghost Border`.
- **Tertiary:** Text-only using `primary` (#FFC880) with an arrow icon for directional cues.

### Cards & Lists
- **No Dividers:** Prohibit the use of divider lines. Separate list items using 16px-24px of vertical white space or alternating backgrounds of `surface_container_low` and `surface_container`.
- **The Cinematic Card:** Large border radius (`xl` / 1.5rem). Use a "bottom-up" black gradient overlay on images to ensure `title-lg` text remains legible at the bottom of the card.

### Input Fields
- **Default State:** `surface_container_high` (#2A2A2A) background, no border.
- **Focus State:** 1px "Ghost Border" using `primary_container` (#F5A623) and a subtle outer glow (4px blur).
- **Labeling:** Use `label-md` in `on_surface_variant` positioned above the field, never inside as a placeholder.

### Chips
- **Style:** Pill-shaped (`full` / 9999px radius).
- **Selection:** Selected chips use `secondary_container` (#5F4112) with `on_secondary_container` (#D9AE75) text.

---

## 6. Do's and Don'ts

### Do:
- **Use "Bleed" Layouts:** Let high-quality car imagery bleed off the edge of the screen to create a sense of scale.
- **Embrace Negative Space:** Give technical specs and pricing room to breathe. High-end design is defined by what you leave out.
- **Micro-interactions:** Use 300ms "Ease-Out" transitions for hover states on cards, making them feel like they are gently floating toward the user.

### Don't:
- **Don't use pure grey:** Every "dark" color in this system is slightly warm/metallic. Avoid `#222222` or `#333333`. Stick to the provided `surface` tokens.
- **Don't use standard icons:** Use thin-stroke (1.5pt) linear icons that match the geometric nature of Space Grotesk.
- **Don't clutter:** Never place more than three primary actions on a single screen. Direct the user's focus with intent.

### Accessibility Note:
While we use a dark theme, ensure all critical text meets a 4.5:1 contrast ratio. Use the `on_surface` (#E5E2E1) and `primary` (#FFC880) tokens for all essential information. Use `muted` tones only for non-essential decorative labels.