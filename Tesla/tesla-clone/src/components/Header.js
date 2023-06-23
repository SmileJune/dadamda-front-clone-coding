//rfce -> 바로 함수형 컴포넌트 생성

import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@materia-ui/icons/Menu'

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt='' />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a> 
        <a href="#">Tesla Account</a> 
        <CustomMenu />
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;

  // 강사가 full-width를 위해 한 방법 - width: 100vw; 해도 똑같이 적용된다.
  top: 0;
  left: 0;
  right: 0;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`