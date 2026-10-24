# Animation map

Library: Motion for React (`motion`). GSAP, ScrollTrigger, and Lenis were not added. The pinned story is CSS `position: sticky` plus Motion’s `useScroll`.

Reduced motion removes the load fade, the sticky 320vh pin, and the count-up. The story becomes tabs. FAQ still opens and closes.

| Effect | Trigger | Behavior | Duration | Easing |
| --- | --- | --- | --- | --- |
| Hero copy | Load | Opacity 0 and 24px down, then settles | 0.8s, staggered | `[0.22, 1, 0.36, 1]` |
| Header | Always | Fixed capsule. No hide-on-scroll. | n/a | n/a |
| Product story | Desktop scroll through the section | Background, numeral, copy, and image crossfade across 3 stages. Progress bar scale follows scroll. | Color/image 0.7s | CSS ease |
| Product story | Under 1024px, or reduced motion | Tabs 01–03. No pinned scroll. | Instant stage swap | n/a |
| Right-rail jars | Desktop | Upcoming stages are dashed slots. Current and previous stages show the bottle. Click jumps the scroll. | Layout is immediate | n/a |
| Section reveals | Products entering view | 24px rise, once | 0.6s | default Motion |
| Product card hover | Pointer | Image scale 1.04 | 0.7s | CSS |
| Numbers | In view, once | Counts to 3, 150, 10, 30 | 0.9s | ease-out cubic |
| FAQ | Click | Height and opacity | 0.35s | `[0.22, 1, 0.36, 1]` |
| Mobile nav | Menu button | Sheet fades, links stagger 0.05s | 0.35–0.4s | `[0.22, 1, 0.36, 1]` |
| Product dialog | Open | Backdrop and panel | Motion default ~0.3s | Motion |

Not reproduced because they belong to shopping UI: bag count, subscribe toggle, “add stack to bag”, and the buy-band purchase widget.

The GROVE day section’s clock labels (07:30, AM/PM) were not copied. A dotted arc remains as a progress motif without times of day.
