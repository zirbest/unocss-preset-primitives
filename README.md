# unocss-preset-primitives
Utilities and variants for styling (headlessui)[https://github.com/zirbest/unocss-preset-primitives#headlessui] (radix-ui)[https://github.com/zirbest/unocss-preset-primitives#radix-ui] state or (custom)[https://github.com/zirbest/unocss-preset-primitives#custom] one

```bash
npm i -D unocss-preset-primitives
```
# Demo
You can find the code inside the [demo](https://github.com/zirbest/unocss-preset-primitives/tree/main/playground) folder.

# Usage

``` html
<MenuItem>
  <button class="ui-active:bg-violet-5 ui-active:text-white ui-not-active:text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm" >
    <span class="i-radix-icons-drawing-pin-filled mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> presetUno
  </button>
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
