import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'
import { presetHeadlessUi } from '../src/index'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetHeadlessUi(),
    presetIcons({
      cdn: 'https://esm.sh/',
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [transformerVariantGroup()],
})
