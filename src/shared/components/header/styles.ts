import styled from 'styled-components';

export const Header = styled.header`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;

export const Form = styled.header`
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
