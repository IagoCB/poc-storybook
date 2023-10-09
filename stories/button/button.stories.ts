// src/app/button/button.stories.ts

import { StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../src/app/component/button/button.component';

type Story = StoryObj<ButtonComponent>;

const Template = (args: ButtonComponent) => ({
  props: { ...args },
  template: `<button
  [ngClass]="{ primary: type === 'primary', secondary: type === 'secondary' }"
>
  {{ label }}
</button>`,
});

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
  argTypes: {
    type: {
      options: ['primary', 'secondary'],

      control: {
        type: 'radio',
      },
    },
  },
};

export const Primary: Story = {
  name: 'Primary',
  render: Template,
  args: {
    label: 'Primary Button',
    type: 'primary',
  } as Partial<ButtonComponent>,
};

export const Secondary: Story = {
  name: 'Secondary',
  render: Template,
  args: {
    label: 'Secondary Button',
    type: 'secondary',
  } as Partial<ButtonComponent>,
};
