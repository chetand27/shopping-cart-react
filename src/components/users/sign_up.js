import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import '../../assets/App.css';

class UserSignUp extends Component {
  render() {
    return (
      <div className="container">
        <Row className="parent-element">
          <div className="col-sm-12 col-md-6 col-lg-6 col-centered child-element col-design">
            <Form>
              <FormGroup>
                <Label for="user_email">Email</Label>
                <Input type="email" name="user[email]" id="user_email" placeholder="Enter Email" />
              </FormGroup>
              <FormGroup>
                <Label for="user_password">Password</Label>
                <Input type="password" name="user[password]" id="user_password" placeholder="Enter Password" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            </div>          
        </Row>
      </div>
    );
  }
}

export default UserSignUp;
