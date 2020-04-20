import React from 'react';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Normal = () => <Heading>Hello Sonia</Heading>;
export const big = () => <Heading big>Hello Sonia</Heading>;
