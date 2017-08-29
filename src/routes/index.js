import React, { Component } from 'react'
import EmployeeContainer from '../containers/EmployeeContainer'
import Header from '../components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

class Routes extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route path="/" component={EmployeeContainer} />
        </Container>
      </Router>
    )
  }
}

export default Routes
