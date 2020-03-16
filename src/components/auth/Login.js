import React, {useState} from 'react';
import { useForm } from '../../Utils/useForm';
import {isEmpty} from 'lodash';

const isError = ({ firstName, lastName, email, password }) => {
  const errors = {};
  if(isEmpty(email)) errors.email = true;
  if(isEmpty(password)) errors.password = true;
  return errors;
}

const Login = ({}) => {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const name =  e.target.name;
    if (errors[name]) {
      delete errors[name];
      setErrors(errors);
    };
    handleChange(e);
  }

  const onSave = () => {
    const listErrors = isError(values)    
    if(Object.keys(listErrors).length) {
      setErrors(listErrors);
      return
    }

    // api

  }
  return (
    <>
      <h2>Welcome Back!</h2>
      <div className="col">
      <input type="email"
          name='email'
          value={values.email}
          onChange={onChange}
          placeholder="Email Address *"
          className={errors.email ? 'is-valid' : ''}
        />
        </div>
        <div className="col">
        <input type="password"
          name='password'
          value={values.password}
          onChange={onChange}
          placeholder="Password"
          className={errors.password ? 'is-valid' : ''}
          />
        </div>
        <p className="forgot"><a href="#">Forgot Password?</a></p>
        <button onClick={onSave} className="btn">Log In</button>
    </>
  )
}

export default Login