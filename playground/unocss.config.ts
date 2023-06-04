import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { presetHeadlessUi } from '../src/index'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetHeadlessUi(),
    presetRemToPx(),
    presetIcons({
      cdn: 'https://esm.sh/',
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [transformerVariantGroup()],
})
