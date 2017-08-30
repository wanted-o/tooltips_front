import React, { Component } from 'react'
import EmployeeContainer from '../containers/EmployeeContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'
import Header from '../components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

class Routes extends Component {
  render() {
    setTimeout(() => {
      if (
        !localStorage.getItem('auth_token') &&
        window.location.pathname !== '/sign_in' &&
        window.location.pathname !== '/sign_up'
      ) {
        window.location.href = '/sign_in'
      }
    }, 0)
    return (
      <Router>
        <Container>
          <Header />
          <Route exact path="/" component={EmployeeContainer} />
          <Route path="/sign_in" component={LoginContainer} />
          <Route path="/sign_up" component={RegisterContainer} />
        </Container>
      </Router>
    )
  }
}

export default Routes
