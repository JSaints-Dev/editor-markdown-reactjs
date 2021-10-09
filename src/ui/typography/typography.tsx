import styled, { css } from 'styled-components'
import { theme } from 'resources/theme'

type typeTypography = {
  color?: keyof typeof theme.colors;
  fontSize?: keyof typeof theme.fonts.fontSizes;
  fontFamily?: keyof typeof theme.fonts.fontFamily;
  fontWeight?: 400 | 700 | 'normal';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
};

export const Typography = styled.span.attrs<typeTypography>(({ variant }) => ({
  as: variant,
}))<typeTypography>`
  ${({ color = 'black', fontSize = 'xs', fontFamily = 'primary', fontWeight = 'normal' }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.fonts.fontSizes[fontSize]};
    font-family: ${theme.fonts.fontFamily[fontFamily]}, sans-serif;
    font-weight: ${fontWeight};
    margin: 0;
`}
`
