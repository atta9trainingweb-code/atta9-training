# ATTA9 Admin UX Contract

## Scope

This contract covers the authenticated `/admin` product surface. Thai (`th-TH`) is the interface language and `Asia/Bangkok` is the display timezone.

## Canonical UI map

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
| --- | --- | --- | --- | --- |
| Select/Listbox | Native HTML `select` | `app/admin/admin.css` | Native | Platform popup, label, focus, disabled, and error states. |
| Date | Native HTML `input[type=date]` | `app/admin/portfolio/portfolio-form.tsx` | Native Gregorian | ISO `YYYY-MM-DD` output and keyboard access. |
| Form | Server Actions plus inline field errors | This contract and each route's `actions.ts` | Create / edit / filter | `noValidate`, server auth/validation, stable pending button, duplicate-submit prevention. |
| Scrollbar | Global application baseline | `app/globals.css` | Stable-gutter exceptions | Visible track/thumb, hover, forced colors. |
| CRUD | Admin route group and authenticated Server Actions | This contract | Return to owning list | Full create/edit/publish flow and public Gallery refresh. |

## Navigation and feedback

- “ผลงาน” and “ผู้สนใจ” are the stable primary admin destinations.
- Saving a portfolio returns to the portfolio list. The list announces whether it was saved as a draft or published.
- Validation errors stay inline, preserve entered data, and identify the field that needs correction.
- Published content opens in a new preview tab. Draft content is never exposed by the public query.
- Image removal in the editor only removes the reference from the pending form. It does not delete the storage object.

## Media workflow

- Accepted uploads are JPEG, PNG, WebP, and AVIF, up to 12 MB per file and 30 gallery images per project.
- Upload validation runs before transfer; Supabase Storage independently enforces type and size.
- Each image has editable alternative text, explicit cover selection, and non-drag ordering controls.
- A failed upload preserves every successfully selected and existing image.

## Accessibility and resilience

- WCAG 2.2 AA is the target. Controls use native semantics, visible focus, text labels, and at least 44px touch targets for primary actions.
- Thai IME composition is not intercepted. Search submits explicitly rather than firing during composition.
- Reduced motion disables non-essential transitions. Status is never conveyed by color alone.
- Unsaved editor changes trigger the narrow browser unload safeguard; in-app cancellation is an explicit user action.
