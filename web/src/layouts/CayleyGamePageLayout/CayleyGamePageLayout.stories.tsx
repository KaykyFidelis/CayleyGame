import type { ComponentMeta, ComponentStory } from '@storybook/react'

import CayleyGamePageLayout from './CayleyGamePageLayout'

export const generated: ComponentStory<typeof CayleyGamePageLayout> = (
  args
) => {
  return <CayleyGamePageLayout {...args} />
}

export default {
  title: 'Layouts/CayleyGamePageLayout',
  component: CayleyGamePageLayout,
} as ComponentMeta<typeof CayleyGamePageLayout>
