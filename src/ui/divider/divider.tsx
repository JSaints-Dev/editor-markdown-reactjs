import styled, { css } from 'styled-components/macro'
import { theme } from 'resources/theme'

type typeDivider = {
  bgColor?: keyof typeof theme.colors;
  marginBottom?: keyof typeof theme.spacing | 0;
  marginTop?: keyof typeof theme.spacing | 0;
}

export const Divider = styled.div<typeDivider>`
  height: 2px;
  width: 100%;

  ${({ bgColor }) => bgColor && css`
    background-color: ${theme.colors[bgColor]};
  `}

  ${({ marginBottom }) => marginBottom && css`
    margin: 0 0 ${theme.spacing[marginBottom]} 0;
  `}

  ${({ marginTop }) => marginTop && css`
    margin: ${theme.spacing[marginTop]} 0 0 0;
  `}
`
