import React, {useState} from 'react';
import { useForm } from '../../Utils/useForm';
import {isEmpty} from 'lodash';
import TextUtils from '../../Utils/textUtils';

const isError = ({ firstName, lastName, email, password }) => {
  const errors = {};
  if(isEmpty(firstName)) errors.firstName = true;
  if(isEmpty(lastName)) errors.lastName = true;
  if(isEmpty(email)|| !TextUtils.validateEmail(email)) errors.email = true;
  if(isEmpty(password) || password.length < 5) errors.password = true;
  return errors;
}

const Signup = ({}) => {
  const [values, handleChange] = useForm({ firstName: '', lastName: '', email: '', password: '' });
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
      <h2>Sign Up for Free</h2>
      <div className="row">
        <div className="col">
          <input type="text"
            name='firstName'
            value={values.firstName}
            onChange={onChange}
            placeholder=" First Name *"
            className={errors.firstName ? 'is-valid' : ''}
          />
        </div>
        <div className="col">
          <input type="text"
            name='lastName'
            value={values.lastName}
            onChange={onChange}
            placeholder="Last Name*" 
            className={errors.lastName ? 'is-valid' : ''}
            />
        </div>
      </div>
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
          placeholder="Set A Password" 
          className={errors.password ? 'is-valid' : ''}
          />
      </div>
      <button 
      onClick={onSave}
      className="btn">Get Started</button>
    </>
  )
}

export default Signup