import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typagraphy/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nesciunt, inventore tempore quasi perspiciatis obcaecati delectus doloremque dolores fuga ad eius esse repellat temporibus. Accusamus quibusdam laborum autem odio facilis?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
