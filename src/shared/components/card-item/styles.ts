import styled from 'styled-components';

export const Card = styled.div`
  width: 175px;
  display: flex;
  background: #ffffff;
  border-radius: 4px;
  flex-direction: column;
  color: black;
  flex-shrink: 0;

  &:hover {
    box-shadow: 0.4rem 0.4rem 1em ${props => props.theme.colors.shadow};
    cursor: pointer;
    transition: 0.3s;
    perspective: 200px;
  }
`;

export const Image = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid silver;
  max-height: 175px;
  max-width: 175px;
  height: 175px;
  width: 175px;
`;

export const FreeShipping = styled.span`
  width: fit-content;
  color: #00a650;
`;

export const Title = styled.p`
  padding: 10px;
  font-size: 14px;
`;

export const Price = styled.p``;
