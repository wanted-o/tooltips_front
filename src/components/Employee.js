import React from 'react'
import styled from 'styled-components'
import pure from 'recompose/pure'
import PropTypes from 'prop-types'

import {
  Row,
  Col,
  MediaBox,
  Input,
  Icon,
  Modal,
  Button,
} from 'react-materialize'

const Avatar = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  .materialboxed {
    border-radius: 50%;
    margin: 0px auto;
  }
`
const Title = styled.h3`
  text-align: center;
  font-weight: 900;
  margin: 0px;
  color: #1f7a7a;
`
const Subtitle = styled.h6`
  text-align: center;
  font-weight: 900;
  opacity: 0.3;
  margin-top: 10px;
  margin-bottom: 10px;
`
const Accept = styled.div`
  i {
    line-height: 65px;
    color: green;
    cursor: pointer;
  }
`
const More = styled.div`
  .more {
    display: inline-block;
    cursor: default;
    padding: 0;
    margin: 0 .5em;
    position: relative;
    text-align: center;
    color: #fff;
  }
  .more:hover .label {
    opacity: 0;
    -webkit-transition: opacity .5s .125s ease-out;
    transition: opacity .5s .125s ease-out;
  }
  .more:hover .icon {
    border-radius: 1em;
    margin: 0 10px;
  }

  .icon,
  .label {
    background-color: #1f7a7a;
    line-height: 3.2rem;
    height: 3rem;
  }

  .label {
    border-radius: 2rem;
    position: absolute;
    font-size: .8em;
    font-weight: 900;
    letter-spacing: .0816em;
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;
    pointer-events: none;
    text-transform: uppercase;
    -webkit-transition: opacity .3s .75s ease-out;
    transition: opacity .3s .75s ease-out;
  }

  .icon {
    border-radius: 0;
    cursor: pointer;
    display: inline-block;
    height: 2em;
    margin: 0 -.5em;
    -webkit-transition: background-color .5s ease-out,
      border-radius .5s .25s ease-out, margin .5s .25s ease-out;
    transition: background-color .5s ease-out, border-radius .5s .25s ease-out,
      margin .5s .25s ease-out;
    width: 2em;
    line-height: 2em;
  }
  .icon.first {
    border-bottom-left-radius: 1em;
    border-top-left-radius: 1em;
    margin-left: 0;
  }
  .icon.last {
    border-bottom-right-radius: 1em;
    border-top-right-radius: 1em;
    margin-right: 0;
  }
  .icon:hover {
    background-color: #ebc247;
    color: #111;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 50%;
    border: 0;
    background-color: #1f7a7a;
    color: #eee;
    cursor: pointer;
    font-family: inherit;
    font-weight: 900;
    letter-spacing: .0816em;
    position: relative;
    text-transform: uppercase;
    -webkit-transition: background-color .25s ease-out,
      -webkit-transform .5s ease-out;
    transition: background-color .25s ease-out, -webkit-transform .5s ease-out;
    transition: background-color .25s ease-out, transform .5s ease-out;
    transition: background-color .25s ease-out, transform .5s ease-out,
      -webkit-transform .5s ease-out;
  }
  button:hover {
    background-color: #ebc247;
    color: #111;
  }
  .tooltip-example {
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    text-align: center;
    top: 50%;
    width: 100%;
    margin-top: 50px;
  }

  .tooltip {
    display: inline;
    -webkit-perspective: 500px;
    -moz-perspective: 500px;
    perspective: 500px;
  }
  .tooltip:hover {
    cursor: pointer;
  }
  .tooltip:hover .tooltip__content,
  .first:hover .tooltip__content {
    -webkit-transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    -moz-transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    -ms-transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    -o-transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    opacity: 1;
    pointer-events: auto;
    width: 20vw;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
  }
  .tooltip__content {
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    transition: all 200ms ease;
    -webkit-transform: translate3d(-50%, 0%, 0);
    -moz-transform: translate3d(-50%, 0%, 0);
    -ms-transform: translate3d(-50%, 0%, 0);
    -o-transform: translate3d(-50%, 0%, 0);
    transform: translate3d(-50%, 0%, 0);
    -webkit-transform-origin: 0 10px;
    -moz-transform-origin: 0 10px;
    -ms-transform-origin: 0 10px;
    -o-transform-origin: 0 10px;
    transform-origin: 0 10px;
    background-color: #fff;
    border-radius: 4px;
    color: #2f2f2f;
    display: block;
    font-size: 14px;
    font-weight: normal;
    left: 50%;
    opacity: 0;
    padding: 10px 20px;
    pointer-events: none;
    position: absolute;
    text-align: left;
    bottom: 100%;
  }
  .tooltip__content:before {
    border-color: transparent;
    border-top-color: #fff;
    border-style: solid;
    border-width: 10px;
    content: ' ';
    display: block;
    height: 0;
    left: 50%;
    margin-left: -10px;
    position: absolute;
    bottom: -20px;
    width: 0;
  }
  .tooltip__content:after {
    content: ' ';
    display: block;
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 20px;
  }
  .tooltip__content:hover {
    -webkit-transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    -moz-transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    -ms-transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    -o-transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    transform: rotateX(0deg) translate3d(-50%, -10%, 0);
    opacity: 1;
    pointer-events: auto;
  }
  .tooltip__text {
    color: #fff;
    font-size: 14px;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  @media only screen and (min-width: 600px) {
    /* For tablets: */
    .tooltip:hover .tooltip__content,
    .first:hover .tooltip__content {
      width: 30vw;
    }
  }
  @media only screen and (min-width: 768px) {
    /* For desktop: */
  }
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .tooltip:hover .tooltip__content,
    .first:hover .tooltip__content {
      width: 80vw;
    }
  }
`

function Employee({
  first_name,
  company,
  image_file_name,
  save,
  edit,
  cancel,
  editing,
  id,
  handleChange,
  age,
  last_name,
  _delete,
}) {
  return (
    <Col l={3} m={6} s={12} className="grid-example" style={{ height: '65vh' }}>
      <Avatar>
        <MediaBox
          src={
            'https://s3-us-west-2.amazonaws.com/feedback-adpi/employees/' +
            image_file_name
          }
          caption={first_name}
          width="75%"
        />
      </Avatar>
      {editing === id
        ? <Row>
            <Input
              validate
              defaultValue={first_name}
              l={12}
              label="First Name"
              onChange={handleChange('first_name')}
              style={{ textAlign: 'center' }}
            />
            <Accept
              onClick={save.bind(this, id, first_name, last_name, age, company)}
            >
              <Icon>done</Icon>
            </Accept>
          </Row>
        : <Row>
            <Title onClick={edit.bind(this, id)}>
              {first_name}
            </Title>
          </Row>}
      <Subtitle>
        {company}
      </Subtitle>
      <More>
        <div className="more">
          <span className="tooltip">
            <Icon className="icon first">visibility</Icon>
            <span className="tooltip__content">
              <Avatar>
                <MediaBox
                  src={
                    'https://s3-us-west-2.amazonaws.com/feedback-adpi/employees/' +
                    image_file_name
                  }
                  caption="A demo media box1"
                  width="45%"
                />
              </Avatar>
              <div className="tooltip__text">
                Hello, my name is{' '}
                <h5>
                  {first_name} {last_name}
                </h5>
                I am <h5>{age}</h5>
                And I am working in <h5>{company}</h5> company
              </div>
            </span>
          </span>
          <Modal
            header="Edit Employee:"
            trigger={
              <span>
                <Icon className="icon">edit</Icon>
              </span>
            }
            actions={
              <span>
                <Button
                  waves="light"
                  flat
                  className="modal-action modal-close"
                  style={{ margin: '0px 20px', float: 'none' }}
                >
                  Cancel
                </Button>
                <Button
                  className="modal-action modal-close"
                  onClick={save.bind(
                    this,
                    id,
                    first_name,
                    last_name,
                    age,
                    company
                  )}
                  style={{ margin: '0px 20px', float: 'none' }}
                >
                  Update
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
                defaultValue={first_name}
                onChange={handleChange('first_name')}
              />
              <Input
                s={6}
                label="Last Name"
                defaultValue={last_name}
                onChange={handleChange('last_name')}
              />
              <Input
                s={6}
                label="Age"
                defaultValue={age}
                onChange={handleChange('age')}
              />
              <Input
                s={6}
                label="Company"
                defaultValue={company}
                onChange={handleChange('company')}
              />
            </Row>
          </Modal>
          <Modal
            header="Delete Employee:"
            trigger={
              <span>
                <Icon className="icon last">delete</Icon>
              </span>
            }
            actions={
              <span>
                <Button
                  waves="light"
                  flat
                  className="modal-action modal-close"
                  style={{ margin: '0px 20px', float: 'none' }}
                >
                  No
                </Button>
                <Button
                  className="modal-action modal-close"
                  onClick={_delete.bind(this, id)}
                  style={{ margin: '0px 20px', float: 'none' }}
                >
                  Yes
                </Button>
              </span>
            }
            style={{
              backgroundColor: 'rgba(255,255,255)',
              width: '20vw',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontWeight: '900' }}> Are you sure? </h3>
          </Modal>

          <div className="label">More</div>
        </div>
      </More>
    </Col>
  )
}

export default pure(Employee)
