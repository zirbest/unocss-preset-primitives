# unocss-preset-primitives
Utilities and variants for styling [headlessui](https://github.com/zirbest/unocss-preset-primitives#headlessui) [radix-ui](https://github.com/zirbest/unocss-preset-primitives#radix-ui) [kobalte](https://github.com/zirbest/unocss-preset-primitives#kobalte) state or [custom](https://github.com/zirbest/unocss-preset-primitives#custom) one

```bash
npm i -D unocss-preset-primitives
```
# Demo
You can find the code inside the [playground](https://github.com/zirbest/unocss-preset-primitives/tree/main/playground) folder.

# Usage

``` vue
<MenuItem class="ui-active:bg-violet-5 ui-active:text-white ui-not-active:text-gray-900">
  Options
</MenuItem>

<MenuItem>
</MenuItem>

<!-- using presetAttributify -->
<MenuItem
  ui-active="bg-violet-5 text-white"
  ui-not-active="text-gray-900"
  >
  Options
</MenuItem>
```
## headlessui
```typescript
// headless-ui
import { presetHeadlessUi } from 'unocss-preset-primitives'
import presetUno from '@unocss/preset-uno'

Unocss({
  presets: [
    presetUno(),
    // default options {prefix: 'ui'}
    presetHeadlessUi(/* options */),
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
    // default options {prefix: 'ui'}
    presetRadixUi(/* options */),
  ],
})
```

## kobalte
```typescript
// kobalte
import { presetKobalte } from 'unocss-preset-primitives'
import presetUno from '@unocss/preset-uno'

Unocss({
  presets: [
    presetUno(),
    // default options {prefix: 'ui'}
    presetKobalte(/* options */),
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
      isAttrBoolean = false,
    }),
  ],
})
```

## List of variants

| Variant            | Inverse variant        |
| ------------------ | ---------------------- |
| `ui-open`          | `ui-not-open`          |
| `ui-checked`       | `ui-not-checked`       |
| `ui-selected`      | `ui-not-selected`      |
| `ui-active`        | `ui-not-active`        |
| `ui-disabled`      | `ui-not-disabled`      |
| `ui-focus-visible` | `ui-not-focus-visible` |
| `...`              | `...`                  |
