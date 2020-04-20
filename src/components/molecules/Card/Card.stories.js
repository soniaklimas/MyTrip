import React from 'react';
import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const PrimaryColor = () => <Card />;
export const TwitterColor = () => <Card cardType="twitter" />;
export const ArticleColor = () => <Card cardType="article" />;
