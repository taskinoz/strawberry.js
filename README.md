# Strawberry.js 🍓

A simple package to count the ammount of characters in string.

## Installation
This package was to test publishing with JSR which you can find here - https://jsr.io/@taskinoz/strawberryjs

## Usage

Import the package and call it:

```ts
strawberry("r", "strawberry"); // 3

strawberry("a", "banana"); // 3

strawberry("l", "grapefruit"); // 0
```

Make it case sensitive:

```ts
strawberry("R", "strawberry", true); // 0

strawberry("a", "BANANA", true); // 0

strawberry("A", "GrApEfRuIt", true); // 1
```

## Structure

Strawberry:

- character - `r`
- string - `strawberry`
- case sensitivity - `true` or `false`
