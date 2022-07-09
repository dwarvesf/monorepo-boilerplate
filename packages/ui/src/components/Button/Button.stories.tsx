import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>
}

export const Basic = Template.bind({})
Basic.args = {
  appearance: 'primary',
  size: 'md',
}
