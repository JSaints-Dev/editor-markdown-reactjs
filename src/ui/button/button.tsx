import styled from 'styled-components/macro'

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  width: 100%;
`
