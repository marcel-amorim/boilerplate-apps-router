import React from 'react'

import { Preview } from '@storybook/react'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title
} from '@storybook/blocks'
import '../src/app/globals.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      toc: true,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      )
    }
  }
}

export default preview
