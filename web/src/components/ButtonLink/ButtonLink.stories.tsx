// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ButtonLink> = (args) => {
//   return <ButtonLink {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ButtonLink from './ButtonLink'

export const generated = () => {
  return <ButtonLink />
}

export default {
  title: 'Components/ButtonLink',
  component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>
