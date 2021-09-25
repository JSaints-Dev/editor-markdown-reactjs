import styled, { css } from 'styled-components/macro'
import { theme } from 'resources/theme'

type typeDivider = {
  bgColor?: keyof typeof theme.colors;
  marginY?: keyof typeof theme.spacing | 0;
}

export const Divider = styled.div<typeDivider>`
  height: 2px;
  width: 100%;

  ${({ bgColor }) => bgColor && css`
    background-color: ${theme.colors[bgColor]};
  `}

  ${({ marginY }) => marginY && css`
    margin: ${theme.spacing[marginY]} 0;
  `}
`
