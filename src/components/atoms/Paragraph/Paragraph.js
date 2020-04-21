import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export default Paragraph;
