import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    hasAgreed: false
  };

  handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  };

  render() {
    return (
      <div className='FormCenter'>
        <form className='FormFields' onSubmit={this.handleSubmit}>
          <div className='FormField'>
            <label htmlFor='name' className='FormField__Label'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className='FormField__Input'
              placeholder='Enter your full name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label htmlFor='password' className='FormField__Label'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='FormField__Input'
              placeholder='Enter your password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label htmlFor='email' className='FormField__Label'>
              E-mail Address
            </label>
            <input
              type='email'
              id='email'
              className='FormField__Input'
              placeholder='Enter your email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label className='FormField__CheckboxLabel'>
              <input
                type='checkbox'
                className='FormField__Checknbox'
                name='hasAgreed'
                value={this.state.hasAgreed}
                onChange={this.state.handleChange}
              />{" "}
              I agree to all statements in{" "}
              <a href='' className='FormField__TermsLink'>
                terms of service
              </a>
            </label>
          </div>
          <div className='FormField'>
            <button className='FormField__Button mr-20'>Sign Up</button>
            <Link to='/sign-in' className='FormField__Link'>
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
