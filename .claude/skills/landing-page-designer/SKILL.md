---
name: landing-page-designer
description: Audit, redesign, and modernize landing page UI/UX. Use when asked to improve a landing page, modernize a homepage, increase conversion, or refactor landing page components. Works within existing stacks (Next.js, React, Tailwind, shadcn/ui).
---

# Landing Page Designer SKILL

## Workflow

### 1. Inspect — Read before writing anything
- Read `CLAUDE.md`, `README`, `tailwind.config.*`, theme/token files, and shadcn/ui setup
- Locate landing page files: `app/page.tsx`, `pages/index.*`, `components/sections/`, `components/ui/`
- Map component hierarchy and identify reusable primitives already in the repo

### 2. Audit — Deliver this before any code
Score each section (hero, features, social proof, CTA, nav, footer) on:
- Value prop clarity (can a user understand what this does in 5 seconds?)
- CTA prominence and repetition
- Visual hierarchy and scannability
- Trust signals (logos, testimonials, stats)
- Responsive behavior (320px / 768px / 1280px)
- Contrast ratios (4.5:1 body, 3:1 large text)

Output: strengths, weaknesses, ranked opportunities.

### 3. Propose 3 concepts per section
For each major section, describe 3 directions covering layout, visual tone, conversion benefit, and complexity (low/med/high). Pick one and justify it.

### 4. Implement
Apply the selected direction. Constraints:
- No new dependencies unless unavoidable (justify explicitly)
- Reuse existing shadcn/ui components and Tailwind tokens
- Edit only landing page files: `.tsx`, `.jsx`, `.css`, page/layout/theme files

**Preferred patterns:**
```tsx
// Card-based feature section (Tailwind + shadcn)
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
  <Card className="border-border/50 bg-card/60 backdrop-blur-sm">
    <CardHeader>
      <div className="mb-2 w-fit rounded-md bg-primary/10 p-2">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <CardTitle className="text-base">Feature</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">...</CardContent>
  </Card>
</div>

// Strong hero CTA pair
<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
  <Button size="lg" className="w-full sm:w-auto">Get started</Button>
  <Button size="lg" variant="outline" className="w-full sm:w-auto">See demo</Button>
</div>

// Subtle section separator (spacing over borders)
<section className="py-24 md:py-32">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">...</div>
</section>
```

### 5. Validate before finishing
- [ ] Run `npx lighthouse <url> --view` — Performance ≥ 90, Accessibility ≥ 95
- [ ] Check responsive layout at 320px, 768px, 1280px in browser devtools
- [ ] Verify all interactive elements have visible focus states
- [ ] Confirm no TypeScript errors: `npx tsc --noEmit`
- [ ] Confirm no build errors: `npm run build`

## Output
1. Audit (strengths / weaknesses / ranked opportunities)
2. 3 concept options per section + recommended direction
3. Production-ready code changes
4. Summary of improvements per section
5. A/B test ideas (optional)

## Guiding principle
Preserve what works. Every change must improve clarity, usability, or conversion — not just aesthetics.
