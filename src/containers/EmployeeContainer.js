import React from 'react'
import PropTypes from 'prop-types'
import { Employee } from '../components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EmployeeActions from '../actions/employee'
import styled from 'styled-components'
import {
  Row,
  Col,
  Input,
  Icon,
  Modal,
  Button,
  MediaBox,
} from 'react-materialize'

const Avatar = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  .materialboxed {
    border-radius: 50%;
    margin: 0px auto;
  }
  img {
    width: 80%;
    cursor: pointer;
    opacity: 0.3;
    -webkit-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
  }
  img:hover {
    opacity: 0.6;
    -webkit-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
    -webkit-transform: scale(1.1);
  }
`
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
      image: '',
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
  reset = index => {
    this.setState({
      first_name: '',
      last_name: '',
      age: '',
      company: '',
      image: '',
    })
    document.getElementsByClassName('file_input')[index + 1].value = ''
  }
  handleChange = (key, index) => {
    return function(e) {
      let state = {}
      if (key === 'image') {
        let file =
          index === 0
            ? document.getElementsByClassName('file_input')[1].files[0]
            : document.getElementsByClassName('file_input')[index + 1].files[0]
        state[key] = file
      } else {
        state[key] = e.target.value
      }
      this.setState(state)
    }.bind(this)
  }
  save = (id, first_name, last_name, age, company, image) => {
    let employee = {
      first_name: first_name,
      last_name: last_name,
      age: age,
      company: company,
      image: image,
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
    if (this.state.image !== '' && this.state.image !== image) {
      employee.image = this.state.image
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
        image: '',
      })
    })
  }
  _delete = id => {
    this.props.delete_employee(id).then(() => {
      this.props.get_employees()
    })
  }
  add = () => {
    let employee = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
      company: this.state.company,
      image: document.getElementsByClassName('file_input')[0].files[0],
    }
    const { add_employee } = this.props
    return add_employee(employee).then(() => {
      this.props.get_employees()
      this.setState({
        first_name: '',
        last_name: '',
        age: '',
        company: '',
        image: '',
      })
    })
  }
  render() {
    var employees
    console.log(this.state)
    if (
      this.props.employee.all_employees &&
      this.props.employee.all_employees.length > 0
    ) {
      employees = this.props.employee.all_employees.map((employee, index) => {
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
            image={employee.image}
            reset={this.reset}
            index={index}
          />
        )
      })
    }
    return (
      <Row>
        {localStorage.getItem('role') !== 'admin'
          ? null
          : <Col
              l={3}
              m={6}
              s={12}
              className="grid-example"
              style={{ height: '65vh' }}
            >
              <Modal
                header="Add Employee:"
                trigger={
                  <Avatar>
                    <div className="material-placeholder">
                      <img src={'http://icma.com/images/icon_plus.png'} />
                    </div>
                  </Avatar>
                }
                actions={
                  <span>
                    <Button
                      waves="light"
                      flat
                      className="modal-action modal-close"
                      style={{ margin: '0px 20px', float: 'none' }}
                      onClick={this.reset.bind(this, 0)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="modal-action modal-close"
                      style={{ margin: '0px 20px', float: 'none' }}
                      onClick={this.add}
                    >
                      Add
                    </Button>
                  </span>
                }
                style={{
                  backgroundColor: 'rgba(255,255,255)',
                  width: '40vw',
                  textAlign: 'center',
                }}
              >
                <Row>
                  <Input
                    s={6}
                    label="First Name"
                    onChange={this.handleChange('first_name')}
                  />
                  <Input
                    s={6}
                    label="Last Name"
                    onChange={this.handleChange('last_name')}
                  />
                  <Input
                    s={6}
                    label="Age"
                    onChange={this.handleChange('age')}
                  />
                  <Input
                    s={6}
                    label="Company"
                    onChange={this.handleChange('company')}
                  />
                  <input
                    type="file"
                    onChange={this.handleChange('image', 0)}
                    className="file_input"
                  />
                </Row>
              </Modal>
            </Col>}
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
