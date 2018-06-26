import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';

class ConfirmationScreen extends Component {
  render() {
    return (
      <div className="container">
        <Row className="parent-element">
          <div className="col-sm-12 col-md-6 col-lg-6 col-centered child-element col-design">          
              <Form>
                <h2>Verification Code</h2>
                <hr/>
                <FormGroup>
                  <Label for="user_confirmation_at">Please check your email for a message with your Verification code.<br/> Your Verification code is 6 digits long.</Label>
                  <Input type="input" name="user[confirmation_at]" id="user_confirmation_at" placeholder="Enter Confirmation code" />
                </FormGroup>
                <Button className='sign_up_btn'>Verify</Button>
                <Button>Resend Verification Code</Button>
              </Form>
            </div>          
        </Row>
      </div>
    );
  }
}

export default ConfirmationScreen;