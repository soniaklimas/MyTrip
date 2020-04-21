import styled from 'styled-components';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.lightGray};
  border: none;
  border-radius: 50px;

  @media (max-width: 576px) {
    padding: 10px 20px;
  }

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.darkGrey};
  }
`;

export default Input;
