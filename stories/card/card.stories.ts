// src/app/card/card.stories.ts

import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { CardComponent } from '../../src/app/component/card/card.component';

export default {
  title: 'Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
    }),
  ],
} as Meta;

export const Default: StoryFn = () => ({
  component: CardComponent,
  template: `
    <app-card>
      <h2>Title</h2>
      <p>Content goes here...</p>
    </app-card>
  `,
});
