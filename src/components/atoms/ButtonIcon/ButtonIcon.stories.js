import React from 'react';
import styled from 'styled-components';
import { addDecorator } from '@storybook/react';

import ideaIcon from 'assets/icons/idea.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import tickIcon from 'assets/icons/tick.svg';
import ButtonIcon from './ButtonIcon';

const BlueBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;
export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
};
addDecorator((story) => <BlueBackground>{story()}</BlueBackground>);
export const Idea = () => <ButtonIcon icon={ideaIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Logout = () => <ButtonIcon icon={logoutIcon} />;
export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
export const Tick = () => <ButtonIcon icon={tickIcon} />;
