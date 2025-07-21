import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetHeadlessUi } from 'unocss-preset-primitives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetHeadlessUi({
      prefix: 'ui',
    }),
    presetIcons({
      cdn: 'https://esm.sh/',
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
