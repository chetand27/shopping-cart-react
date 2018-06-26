import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { fetchApi } from '../../components/utils/fetchApi';

class UserSignUp extends Component {
	constructor() {
    super();

    this.state = { email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const body = {
      user: {
          email: this.state.email,
          password: this.state.password
      }
    };
     
    fetchApi('/api/v1/users/sign_up', { method: 'POST', body }).then(user => { console.log(user) }	);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Row className="parent-element">
          <div className="col-sm-12 col-md-6 col-lg-6 col-centered child-element col-design">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="user_email">Email</Label>
                <Input type="email" name="user[email]" id="user_email" placeholder="Enter Email" value={this.state.email} onChange={ e => this.setState({email: e.target.value})} />
              </FormGroup>
              <FormGroup>
                <Label for="user_password">Password</Label>
                <Input type="password" name="user[password]" id="user_password" placeholder="Enter Password" value={this.state.password} onChange={ e => this.setState({password: e.target.value})} />
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
