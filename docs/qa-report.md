# QA report

Checked in the browser against `http://127.0.0.1:5173/` after `npm run build` succeeded (`tsc` and Vite).

The IDE browser panel is about 822px wide, so desktop screenshots are a partial view of a wider layout. A 1440px emulation was also applied. At that width the nav list measured inside the capsule (about 523px wide, starting near x 451) and page overflow was 0. A later check at the panel width also reported overflow 0, no broken images, and no visible “GROVE”, “Shopify”, “checkout”, or “cart” text.

## Checks

| Check | Result |
| --- | --- |
| Nav links exist for Home, Our Products, About Us, Membership, FAQs, Contact | Pass |
| Become a Reseller points at membership | Pass |
| Explore Our Products points at the story | Pass |
| Product story tabs 01–03 render under 1024px | Pass |
| View Details opens the liniment dialog | Pass |
| Inquire from the dialog sets Product Inquiry and names the liniment | Pass |
| Empty submit shows field errors and does not claim success | Pass |
| Mobile menu opens and closes | Pass |
| Images return natural widths | Pass |
| Horizontal overflow | Pass at the measured widths |
| Production build | Pass |

A completed form (name, mobile, email, message, Product Inquiry) shows: “Checked, but not sent. This form is not connected to an email service or database yet, so the inquiry was not submitted.” No request is sent.

## Visual notes

- Hero, product cards, dialog, and mobile menu match the cream / moss / pill system.
- Product photos are poster crops. The magnesium card shows the back label. See `asset-inventory.md`.
- Desktop pinned story was confirmed in structure at a 1440 layout (stage “02”, large numeral, chips, pill, arched image). The full three-column rail was wider than the visible panel, so the jar column was only partly in frame.
- FAQ open/close is implemented with `aria-expanded`. The first item is open on load. A second row was not clicked in this pass.
- `prefers-reduced-motion` is handled in CSS and in Motion. It was not toggled in the browser.

## Still to configure before launch

- Inquiry delivery (email or database). The form is intentionally not connected.
- Phone, email, hours, complete street address, and map.
- Founder biography, founding year, and manufacturing history, if they should appear.
- Front-facing product cutouts.
- Confirmation of membership contents and commission terms.
- Privacy or legal pages, only after the text exists.
