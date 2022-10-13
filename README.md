# unocss-preset-primitives

```bash
npm i -D unocss-preset-primitives
```

## headlessui
```typescript
// headless-ui
import { presetHeadlessUi } from 'unocss-preset-primitives'
import presetUno from '@unocss/preset-uno'

Unocss({
  presets: [
    presetUno(),
    presetHeadlessUi(),
  ],
})
```

## radix-ui
```typescript
// radix-ui
import { presetRadixUi } from 'unocss-preset-primitives'
import presetUno from '@unocss/preset-uno'

Unocss({
  presets: [
    presetUno(),
    presetHeadlessUi(),
  ],
})
```

## custom
```typescript
// custom
import presetPrimitives from 'unocss-preset-primitives'
import presetUno from '@unocss/preset-uno'

Unocss({
  presets: [
    presetUno(),
    presetPrimitives( {
      prefix: 'ui',
      variants: 'enable|disable',
      selector: 'data-bar-state'
    }),
  ],
})
```

## List of variants

| Variant       | Inverse variant   |
| ------------- | ----------------- |
| `ui-open`     | `ui-not-open`     |
| `ui-checked`  | `ui-not-checked`  |
| `ui-selected` | `ui-not-selected` |
| `ui-active`   | `ui-not-active`   |
| `ui-disabled` | `ui-not-disabled` |
