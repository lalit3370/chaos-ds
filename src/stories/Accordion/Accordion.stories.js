import { fn } from 'storybook/test';

import { Accordion } from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Molecule/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
};

export const Basic = {
    args: {
      accordionData: [{
        id: '1',
        heading: 'headeing',
        content: `Lorem i123psum dolor sit amet consectetur, adipisicing elit. Ad deserunt
          ratione iure exercitationem autem, recusandae aliquam optio nulla,
          doloribus ea delectus saepe debitis, et enim? Veniam molestias in
          beatae dolores!`
      }]
    }
}