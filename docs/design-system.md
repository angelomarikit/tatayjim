# Design system

The page follows GROVE’s measured layout and Instrument Sans, with Tatay Jim color accents kept narrow.

## Color

| Token | Value | Use |
| --- | --- | --- |
| cream | `#EFE8DA` | Page, hero, product section, how-to, membership |
| paper | `#F8F4EC` | Nav capsule, cards, FAQ, form |
| sage | `#DCE3CC` | Story stage one, numbers, include chips |
| sand | `#E7DCC8` | Story stage two |
| tile | `#EEE6DA` | Image wells |
| ink | `#22311C` | Text, footer, reseller pill |
| moss | `#4F6B3A` | Eyebrow dots, primary pills, numbers |
| forest | `#063B23` | Brand story band. Brand primary. |
| herbal | `#176B35` | Available darker green |
| gold | `#C9A53B` | Tagline, reseller card border, footer membership link |
| white | `#FFFFFF` | Not used as a page fill |

Ink at 70–78% is the secondary text color, matching the reference.

## Type

Instrument Sans.

- Eyebrow: 12px, weight 600, uppercase, tracking 0.13em
- Hero: 66px desktop, weight 500, tracking -0.035em, line-height 0.98
- Section title: 64px desktop, weight 500, tracking -0.04em, line-height 1
- Body: 18px, line-height about 1.5
- Nav: 15px, weight 500
- Button: 16px, weight 500

Headlines scale down with `clamp`-style Tailwind sizes at tablet and mobile.

## Space, radius, shadow

- Content width 1320px
- Section padding about 96–128px
- Cards and photos: 24–28px radius
- Controls: full pill, 56px height, 40px arrow circle
- Nav: 62px pill
- Shadow is limited to the hero product card

## Breakpoints

- Desktop story pin and center nav: 1024px and up
- Product grid: 3 columns from 768px
- Below 1024px the story is a tabbed panel, not a long sticky scroll
- Mobile nav is a full-screen cream sheet

## Components

`Container`, `Eyebrow`, `PillButton`, `Header`, `Hero`, `ProductStory`, `Products`, `Ingredients`, `HowTo`, `Numbers`, `BrandStory`, `Membership`, `Opportunity`, `Faq`, `Contact`, `Footer`, `ProductDialog`.

Copy and prices live in `src/data/site.ts`.
