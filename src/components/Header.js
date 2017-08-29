import React from 'react'
import logo from '../assets/logo.svg'
import styled, { keyframes } from 'styled-components'
import { Row, Navbar, NavItem, Icon } from 'react-materialize'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopBar = styled.div`
  background-color: #222;
  padding: 20px;
  color: #fff;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`

function Header() {
  return (
    <Row>
      <Navbar right fixed={true}>
        <NavItem href="get-started.html">
          <Icon>search</Icon>
        </NavItem>
        <NavItem href="get-started.html">
          <Icon>view_module</Icon>
        </NavItem>
      </Navbar>
    </Row>
  )
}

export default Header
