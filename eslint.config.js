import { antfu } from '@antfu/eslint-config'

export default antfu({
  overrides: {
    typescript: {
      'no-console': 'off',
    },
  },
})
