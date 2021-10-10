import * as S from './styles'
import { Logo } from 'sidebar/logo'
import { Button, Divider, Typography } from 'ui'

export function SideBar () {
  return (
    <S.SideBarContainer>
      <S.AreaLogo>
        <Logo />
      </S.AreaLogo>
      <Divider marginBottom='md' bgColor='primary' />
      <Button>
        <S.Plus />
        <Typography variant='span' fontWeight={400}>
          Adicionar arquivos
        </Typography>
      </Button>
    </S.SideBarContainer>
  )
}
