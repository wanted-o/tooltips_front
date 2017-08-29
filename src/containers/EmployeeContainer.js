import React from 'react'
import PropTypes from 'prop-types'
import { Employee } from '../components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EmployeeActions from '../actions/employee'
import { Row } from 'react-materialize'

class EmployeeContainer extends React.Component {
  static propTypes = {
    get_employees: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      editing: null,
      first_name: '',
      last_name: '',
      age: '',
      company: '',
    }
    this.props.get_employees()
  }
  edit = id => {
    console.log(id)
    this.setState({
      editing: id,
    })
  }
  cancel = () => {
    this.setState({
      editing: null,
    })
  }
  handleChange = key => {
    return function(e) {
      let state = {}
      state[key] = e.target.value
      this.setState(state)
    }.bind(this)
  }
  save = (id, first_name, last_name, age, company) => {
    let employee = {
      first_name: first_name,
      last_name: last_name,
      age: age,
      company: company,
    }
    if (this.state.first_name !== '' && this.state.first_name !== first_name) {
      employee.first_name = this.state.first_name
    }
    if (this.state.last_name !== '' && this.state.last_name !== last_name) {
      employee.last_name = this.state.last_name
    }
    if (this.state.age !== '' && this.state.age !== age) {
      employee.age = this.state.age
    }
    if (this.state.company !== '' && this.state.company !== company) {
      employee.company = this.state.company
    }
    console.log(employee)
    const { update_employee } = this.props
    return update_employee(id, employee).then(() => {
      this.props.get_employees()
      this.setState({
        editing: null,
      })
      this.setState({
        first_name: '',
        last_name: '',
        age: '',
        company: '',
      })
    })
  }
  _delete = id => {
    this.props.delete_employee(id).then(() => {
      this.props.get_employees()
    })
  }
  componentDidUpdate = () => {}
  render() {
    var employees
    if (this.props.employee.all_employees) {
      employees = this.props.employee.all_employees.map(employee => {
        return (
          <Employee
            id={employee._id.$oid}
            key={employee._id.$oid}
            first_name={employee.first_name}
            company={employee.company}
            age={employee.age}
            last_name={employee.last_name}
            image_file_name={employee.image_file_name}
            save={this.save}
            edit={this.edit}
            cancel={this.cancel}
            editing={this.state.editing}
            handleChange={this.handleChange}
            _delete={this._delete}
          />
        )
      })
    }
    return (
      <Row>
        {employees}
      </Row>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  employee: createSelector(
    state => state.employee,
    employeeState => employeeState
  ),
})
function mapDispatchToProps(dispatch) {
  return bindActionCreators(EmployeeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)
