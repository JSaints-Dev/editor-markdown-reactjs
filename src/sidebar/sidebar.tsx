import * as S from './styles'
import { Logo } from 'sidebar/logo'
import { Divider } from 'ui/divider'

export function SideBar () {
  return (
    <S.SideBarContainer>
      <S.AreaLogo>
        <Logo />
      </S.AreaLogo>
      <Divider marginY='xs' bgColor='primary' />
    </S.SideBarContainer>
  )
}
