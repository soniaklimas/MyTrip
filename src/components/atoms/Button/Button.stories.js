// import React from 'react';
// import Button from './Button';

// export default {
//   title: 'Button',
//   component: Button,
// };

// export const Primary = () => <Button>Hello Button</Button>;
// export const Secondary = () => <Button secondary>Hello Button</Button>;

import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    primaryColor: '#ACD3D8',
    twitterColor: '#C1BDDB',
    articleColor: '#E7F3D5',
  };
  const defaultValue = '#ACD3D8';
  const groupId = 'GROUP-ID1';
  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}>Hello Roman</Button>;
};
export const Secondary = () => <Button secondary>Hello Button</Button>;
