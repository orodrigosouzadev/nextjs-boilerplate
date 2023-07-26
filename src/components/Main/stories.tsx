import type { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: { type: 'string' },
    description: { type: 'string' }
  }
} as Meta<typeof Main>

type Story = StoryObj<typeof Main>

export const Basic: Story = {
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
}
