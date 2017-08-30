import React from 'react'
import styled from 'styled-components'
import pure from 'recompose/pure'
import PropTypes from 'prop-types'

import { Row, Col, Input, Icon, Button } from 'react-materialize'

const LoginWrapper = styled.div`
  max-width: 30%;
  margin: 15% auto;
`

function Login({ handleChange, login_user }) {
  return (
    <Row>
      <LoginWrapper>
        <Input
          type="email"
          label="Email"
          s={12}
          onChange={handleChange('email')}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          type="password"
          label="password"
          s={12}
          onChange={handleChange('password')}
        >
          <Icon>vpn_key</Icon>
        </Input>
        <Button onClick={login_user}>LOGIN</Button>
      </LoginWrapper>
    </Row>
  )
}

export default pure(Login)
