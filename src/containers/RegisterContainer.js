import React from 'react'
import PropTypes from 'prop-types'
import Register from '../components/Register'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/login'
import styled from 'styled-components'

class RegisterContainer extends React.Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    }
  }
  handleChange = key => {
    return function(e) {
      let state = {}
      state[key] = e.target.value
      this.setState(state)
    }.bind(this)
  }
  register_user = () => {
    let user = {
      user: {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        role: 'user',
      },
    }
    const { register } = this.props
    return register(user)
      .then(() => {
        this.setState({
          email: '',
          password: '',
          password_confirmation: '',
          role: '',
        })
        window.location.href = '/sign_in'
      })
      .catch(() => {
        alert('Oops, something went wrong')
      })
  }

  render() {
    return (
      <Register
        handleChange={this.handleChange}
        register_user={this.register_user}
      />
    )
  }
}
const mapStateToProps = createStructuredSelector({
  user: createSelector(state => state.user, userState => userState),
})
function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
