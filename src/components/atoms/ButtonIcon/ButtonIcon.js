import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  border: none;
  &.active {
    background-color: white;
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
  }

  ${({ card }) =>
    card &&
    css`
      width: 40px;
      height: 40px;
    `}

  ${({ card }) =>
    card &&
    css`
      width: 40px;
      height: 40px;
      @media (max-width: 576px) {
        width: 25px;
        height: 25px;
      }
    `}
`;

export default ButtonIcon;
