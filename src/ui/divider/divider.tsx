import styled, { css } from 'styled-components/macro'
import { theme } from 'resources/theme'

type typeDivider = {
  bgColor?: keyof typeof theme.colors;
}

export const Divider = styled.div`${({ bgColor = 'black' }: typeDivider) => css`
  background-color: ${theme.colors[bgColor]};
  height: 2px;
  width: 100%;
`}
`
