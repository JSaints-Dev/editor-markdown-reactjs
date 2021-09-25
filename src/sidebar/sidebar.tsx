import * as S from './styles'
import { Logo } from 'sidebar/logo'

export function SideBar () {
  return (
    <S.SideBarContainer>
      <S.AreaLogo>
        <Logo />
      </S.AreaLogo>
    </S.SideBarContainer>
  )
}
