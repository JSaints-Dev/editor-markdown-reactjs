import styled from 'styled-components/macro'
import { Plus as UiPlus } from 'ui/icons'

export const SideBarContainer = styled.div`
 background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  min-width: 276px;
  padding: 0 1.5rem;
  width: 18vw;
`

export const AreaLogo = styled.div`
  align-items: center;
  display: flex;
  height: 15%;
  justify-content: center;
  width: 100%;
`

export const ContainerButton = styled.div`
  align-items: center;
  display: flex;
`

export const Plus = styled(UiPlus)`
  margin-right: ${({ theme }) => theme.spacing.xs};
`
