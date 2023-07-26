import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-styling'

import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles
    })
  ]
}

export default preview
