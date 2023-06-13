// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Square> = (args) => {
//   return <Square {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Square from './Square'

export const generated = () => {
  return <Square />
}

export default {
  title: 'Components/Square',
  component: Square,
} as ComponentMeta<typeof Square>
