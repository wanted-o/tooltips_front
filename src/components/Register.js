import React from 'react'
import styled from 'styled-components'
import pure from 'recompose/pure'
import PropTypes from 'prop-types'

import { Row, Col, Input, Icon, Button } from 'react-materialize'
import { Link } from 'react-router-dom'

const RegisterWrapper = styled.div`
  max-width: 30%;
  margin: 15% auto;
`

function Register({ handleChange, register_user }) {
  return (
    <Row>
      <RegisterWrapper>
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
          label="Password"
          s={12}
          onChange={handleChange('password')}
        >
          <Icon>vpn_key</Icon>
        </Input>
        <Input
          type="password"
          label="Confirm Password"
          s={12}
          onChange={handleChange('password_confirmation')}
        >
          <Icon>vpn_key</Icon>
        </Input>
        <Button onClick={register_user}>Register</Button>
        <div style={{ margin: '30px' }}>
          Already have an account?<br />
          <Link to="/sign_in">
            <strong>Sign in</strong>
          </Link>
        </div>
      </RegisterWrapper>
    </Row>
  )
}

export default pure(Register)
