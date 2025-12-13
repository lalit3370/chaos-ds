# Chaos DS

A token-driven design system built with React, SCSS, and Storybook.

This project focuses on **consistency, constraints, and scalability** rather than visual experimentation.

---

## Design Principles

### 1. Token-first
All visual decisions are defined as design tokens.
Components never consume raw values directly.

- Primitive tokens define raw values
- Semantic tokens define intent
- Components use semantic tokens only

---

### 2. Constrained APIs
Components expose a **small, opinionated API**.

If a prop cannot be mapped to a token, it does not exist.

This prevents visual drift and enforces consistency.

---

### 3. No escape hatches
- No `style` props
- No arbitrary `className`
- No ad-hoc overrides

Consistency is enforced at the component boundary.

---

### 4. Storybook as documentation
Storybook is treated as the primary interface for:
- Component usage
- Token visualization
- Theme validation

There is no separate demo app.

---

### 5. Theme support via tokens
Light and dark themes are implemented by swapping CSS variables.
Components remain unchanged.

---

## Tech Stack
- React
- SCSS
- CSS Variables
- Storybook (Vite)
- Vitest + a11y addon

---

## Non-goals
- Pixel-perfect marketing UI
- Highly customizable components
- Tailwind-style utility APIs

This system prioritizes **maintainability over flexibility**.
