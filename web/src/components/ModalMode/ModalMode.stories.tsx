// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ModalMode> = (args) => {
//   return <ModalMode {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ModalMode from './ModalMode'

export const generated = () => {
  return <ModalMode />
}

export default {
  title: 'Components/ModalMode',
  component: ModalMode,
} as ComponentMeta<typeof ModalMode>
