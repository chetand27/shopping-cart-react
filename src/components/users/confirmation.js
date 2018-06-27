import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Alert } from 'reactstrap';
import { fetchApi } from '../../components/utils/fetchApi';
import { Redirect } from 'react-router-dom'

class ConfirmationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      verification_code: '',
      visible: true,
      redirect: false
    };

    this.verificationCodeSubmit = this.verificationCodeSubmit.bind(this);
    this.resendVerificationCode = this.resendVerificationCode.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentWillMount() {
    fetchApi(`/api/v1/users/${this.props.match.params.id}`, { method: 'GET' }).then(obj => {
      this.setState({
        redirect: obj.confirmation_at ? true : false,
      });
    });
  }
 
  onDismiss() {
    this.setState({ visible: false });
  }

  verificationCodeSubmit(event) {
    const body = {
      verification_code: this.state.verification_code
    };
     
    fetchApi(`/api/v1/users/${this.props.match.params.id}/confirmation`, { method: 'POST', body }).then(obj => {
      this.setState({ 
        errors: obj.errors,
        visible: obj.errors ? true : false,
        redirect: !obj.errors ? true : false,
      });
    });
    event.preventDefault();
  }

  resendVerificationCode(event) {
    fetchApi(`/api/v1/users/${this.props.match.params.id}/reset_otp`, { method: 'POST' }).then(obj => {
      this.setState({ 
        success: obj.success,
        visible: obj.success ? true : false,
      });
    });   
  }

  render() {
    return (
      <div className="container">
        <Row className="parent-element">
          <div className="col-sm-12 col-md-6 col-lg-6 col-centered child-element col-design">          
              {
                this.state.errors ? 
                  <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                    { this.state.errors }
                  </Alert>
                :
                  ''
              }
              {
                this.state.success ? 
                  <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                    { this.state.success }
                  </Alert>
                :
                  ''
              } 
              <Form>
                <h2>Verification Code</h2>
                <hr/>
                <FormGroup>
                  <Label for="user_confirmation_at">Please check your email for a message with your Verification code.<br/> Your Verification code is 6 digits long.</Label>
                  <Input type="input" name="verification_code" id="user_confirmation_at" placeholder="Enter Confirmation code" value={this.state.verification_code} onChange={ e => this.setState({verification_code: e.target.value})} />
                </FormGroup>
                { this.state.redirect ? <Redirect to={`/users/sign_in`} /> : ''}
                <Button onClick={this.verificationCodeSubmit} className='sign_up_btn'>Verify</Button>
                <Button onClick={this.resendVerificationCode}>Resend Verification Code</Button>
              </Form>
            </div>          
        </Row>
      </div>
    );
  }
}

export default ConfirmationScreen;