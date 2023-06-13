// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Table> = (args) => {
//   return <Table {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SquareTable from './SquareTable'

export const generated = () => {
  return <SquareTable size={undefined} />
}

export default {
  title: 'Components/Table',
  component: SquareTable,
} as ComponentMeta<typeof SquareTable>
