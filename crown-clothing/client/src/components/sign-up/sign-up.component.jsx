import React, { useState }  from 'react';

import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

import { signUpStart } from "../../redux/user/user.actions";


const SignUp = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = userCredentials;

    if (password !== confirmPassword) {
      alert("Passwords don't match;");
      return;
    }

    signUpStart({ displayName, email, password })
  }

  const handleChange = event => {
    const { name, value } = event.target; 

    setUserCredentials({...userCredentials, [name]: value});
  };
  
  const {displayName, email, password, confirmPassword} = userCredentials;

  return(
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
      <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        ></FormInput>
        <FormInput 
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        ></FormInput>
        <FormInput 
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        ></FormInput>
        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm password'
          required
        ></FormInput>
        <CustomButton type="subit">Sign Up</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);