# GROVE reference audit

Live reference inspected in the browser: https://grove-supplements.framer.website/

Framer project connected for context: Diplomatic Choose copy. Homepage path `/`, font Instrument Sans. The Framer canvas was not edited. The public site is the local React app.

Viewport during inspection: 1920×1080. Observations below are from computed styles and screenshots, not from guessed motion curves inside Framer.

## Header

- Fixed capsule, about 12px from the top, 62px tall, radius pill, fill `rgba(248, 244, 236, 0.8)`.
- Wordmark GROVE: Instrument Sans 26px, weight 600, tracking 5.2px, color `#22311C`.
- Links centered, 15px, weight 500.
- Bag control is a dark pill on the right. Replaced here with “Become a Reseller”. No bag count.

## Hero

- Section height about 1080px, background `#EFE8DA`.
- Eyebrow: 12px, uppercase, weight 600, tracking 1.56px, 8px moss dot `#4F6B3A`.
- Headline: 66px, weight 500, line-height ~65px, tracking -2.31px, color `#22311C`.
- Body: 18px, ink at 78% opacity.
- Primary control: 56px pill, moss fill, cream label, 40px cream arrow circle.
- Right side is a full-height lifestyle photograph. A small paper card sits at the lower right.

## Section order observed

| Section | Top | Height | Background |
| --- | --- | --- | --- |
| Hero | 0 | 1080 | `#EFE8DA` |
| Your day | 1080 | 3672 | `#DCE3CC`, sticky inner viewport |
| Build your stack | 4752 | 1091 | `#F8F4EC` |
| Formulas | 5843 | 986 | `#EFE8DA` |
| Ingredients | 6830 | 1178 | `#F8F4EC` |
| How to take it | 8008 | 956 | `#EFE8DA` |
| Numbers | 8964 | 602 | `#DCE3CC` |
| Evening | 9566 | 976 | `#3D3F6B` |
| The box | 10542 | 876 | `#EFE8DA` |
| FAQ | 11418 | 656 | `#F8F4EC` |
| Buy band | 12074 | 956 | `#22311C` |
| Footer | 13030 | 823 | `#22311C` |

Content width of major inners: about 1320px. Formula tiles: about 429×500, radius 24px.

## Scroll and motion

| Section | Trigger | Initial | Final | Duration / easing | Scroll | Strategy | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Header | Page load | Fixed capsule | Stays fixed, no color swap observed | n/a | Fixed | CSS fixed capsule | High |
| Hero | Load | Copy and photo in place | No large scroll transform observed in the first screen | Not measured as a scroll scene | Static after load | Short load fade in our build | Medium. Entrance timing inside Framer was not exported. |
| Your day | Scroll through ~3 viewports | Sticky sage stage, “07:30 / Morning · Greens”, one jar, dashed slots | Later stage “21:30 / Night · Sleep” on indigo, three jars stacked, progress bar fills | Stage hold is the scroll distance, not a timed tween. Crossfade felt around 0.5–0.7s. | Sticky `top: 0`, parent 3672px | Pinned scroll, stage index from scroll progress | High for structure. Exact easing curve not readable from CSS. |
| Formula cards | Hover not fully measured | Still product tile | No wild hover observed in screenshots | n/a | In-flow | Gentle image scale | Medium |
| Ingredients | In view | Photo with callout pills | Callouts are positioned, not animated in the screenshots | n/a | Static | Positioned labels, no fake milligram values | High |
| How to | In view | Photo left, `/01` `/02` `/03` rows with hairlines | Static in the captured frame | n/a | Static | Same row structure | High |
| Numbers | In view | Large figures | Count-up is likely; the captured frame already showed final numbers | Not timed | In-flow | Count-up on enter | Medium |
| Evening | In view | Dark band, copy left, rounded photo right, cream pill | Static | n/a | Static | Same split, forest green instead of indigo | High for layout |
| FAQ | Click | Row closed, plus icon | Answer expands | About 0.3s height | Click | Height animation | High for pattern. Open state was not clicked on the live site. |
| Footer | In view | Dark columns | No separate entrance isolated | n/a | Static | In-flow | Medium |

Not present, so not added: a clock with AM/PM as a dosage schedule, bag drawer, subscribe radios, and checkout.

## What was not copied

- Build your stack and the buy band are shopping interfaces (checkboxes, subscribe, add to bag). They were not rebuilt as commerce.
- Evening indigo `#3D3F6B` was changed to forest `#063B23` so the dark band matches the brand.
- Times of day (07:30, 12:30, 21:30) were not reused. Stages use 01, 02, and 03.
