// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LevelSelection> = (args) => {
//   return <LevelSelection {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LevelSelection from './LevelSelection'

export const generated = () => {
  return <LevelSelection />
}

export default {
  title: 'Components/LevelSelection',
  component: LevelSelection,
} as ComponentMeta<typeof LevelSelection>
