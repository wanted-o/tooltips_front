import React from 'react'
import PropTypes from 'prop-types'
import { Login } from '../components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/login'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class LoginContainer extends React.Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleChange = key => {
    return function(e) {
      let state = {}
      state[key] = e.target.value
      this.setState(state)
    }.bind(this)
  }
  login_user = () => {
    let user = {
      email: this.state.email,
      password: this.state.password,
    }
    const { login } = this.props
    return login(user)
      .then(() => {
        this.setState({
          email: '',
          password: '',
        })
        window.location.href = '/'
      })
      .catch(() => {
        alert('Invalid email or password')
      })
  }

  render() {
    if (localStorage.getItem('auth_token')) {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontWeight: '900' }}>You are already signed in</h1>
          <Link to="/">HOME</Link>
        </div>
      )
    } else
      return (
        <Login handleChange={this.handleChange} login_user={this.login_user} />
      )
  }
}
const mapStateToProps = createStructuredSelector({
  user: createSelector(state => state.user, userState => userState),
})
function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
