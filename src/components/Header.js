import React from 'react'
import logo from '../assets/logo.svg'
import styled, { keyframes } from 'styled-components'
import {
  Row,
  Col,
  Navbar,
  NavItem,
  Modal,
  Input,
  Button,
} from 'react-materialize'

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
      <Navbar
        style={{ backgroundColor: '#1f7a7a' }}
        brand={
          <h4 style={{ margin: '0px 20px', lineHeight: '64px' }}>
            Tooltips app
          </h4>
        }
        left
      >
        <NavItem
          style={{ margin: '0px 20px' }}
          onClick={() => {
            localStorage.removeItem('auth_token')
          }}
          href="/sign_in"
        >
          Logout
        </NavItem>
      </Navbar>
    </Row>
  )
}

export default Header
