# ATTA9 Training — Design Context

## Product intent

Premium Thai-first B2B corporate training website for HR, L&D teams, executives, and department leaders. The homepage's primary job is to start an in-house training consultation.

## North Star

Modern corporate training with an editorial, evidence-led character. The homepage hero is the visual thesis: an identity-preserving trainer cutout in front of a photographic seminar hall, decisive mixed Thai/English typography, and a deep navy overlay. Course and gallery heroes continue to use authentic workshop photography. Avoid LMS, marketplace, generic SaaS, glassmorphism, and unverified claims.

## Signature

The Impact Line is a fine royal-blue path connecting challenge, learning, and workplace application. It is structural, not decorative.

The homepage hero uses a focused navy-and-amber seminar treatment: warm architectural light, a real room with restrained audience silhouettes, and generous darkness behind the message. Amber belongs to the atmosphere only; brand yellow remains the functional highlight color.

## Customer trust strip

The hero-edge trust panel uses approved customer marks at a consistent optical height. Wide and square marks occupy separate fixed slots, preserve their original aspect ratios, and remain horizontally scrollable with an explicit next control on narrow screens.

## Brand logo usage

Use the full-color ATTA9 logo on white and light surfaces. Use the white ATTA9 logo on navy or other dark brand surfaces. The transparent header switches from the white mark over the hero to the full-color mark when its background becomes white; the mobile menu always uses the full-color mark.

## Runtime token ownership

This file owns visual intent. Normative tokens live in `app/globals.css` under `:root` and are consumed by shared components in `components/`.

## Core tokens

- Navy: `#04152f`, `#071d3d`, `#0a2852`
- Brand blue: `#1746d1`, `#2456f4`, `#3366ff`
- Brand yellow: `#fec93a` — hero headline accents, key figures, and hero icons; primary buttons remain blue
- Light surfaces: `#ffffff`, `#f8fafc`, `#f5f8ff`
- Text: `#0f172a`, muted `#526178`
- Radius: controls `10px`, cards `16px`, panels `20px`
- Container: `1320px`; spacing follows an 8px rhythm
- Thai/body: Noto Sans Thai; English display/utility: Inter

## Accessibility and motion

WCAG 2.2 AA target, 44px minimum touch targets, visible focus rings, semantic controls, stable media aspect ratios, global visible scrollbars, and reduced-motion support.
