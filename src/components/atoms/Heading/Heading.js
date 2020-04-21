import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};

  @media (max-width: 576px) {
    font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
  }
`;

export default Heading;
