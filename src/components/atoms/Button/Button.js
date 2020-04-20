import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background-color:${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  /* background-color: ${({ activeColor, theme }) => theme[activeColor]}; */
  width: 105px;
  height: 30px;
  border: none;
  border-radius: 50px;
  font-family: 'Muli', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
`;

export default Button;
