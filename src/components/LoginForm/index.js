import React, { useState } from 'react';
import * as S from './styled';
import Input from '../Input';
import Button from '../Button';

function LoginForm() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    let formValid = true;
    if (!values.email || values.email === '') {
      formValid = false;
      setFormErrors(prevErrors => ({
        ...prevErrors,
        email: 'Email is required.',
      }));
    }
    if (!values.password || values.password === '') {
      formValid = false;
      setFormErrors(prevErrors => ({
        ...prevErrors,
        password: 'Password is required.',
      }));
    }

    if (formValid) {
      console.log(`Submitted! ${`${values.email} ${values.password}`}`);
    }
  };
  return (
    <S.Wrapper>
      <S.Form onSubmit={e => handleFormSubmit(e)}>
        <S.FormGroup>
          <Input
            error={formErrors.email}
            handleInputChange={handleInputChange}
            label="Email address"
            name="email"
            type="email"
            value={values.email}
          />
          <Input
            error={formErrors.password}
            handleInputChange={handleInputChange}
            label="Password"
            name="password"
            type="password"
            value={values.password}
          />
        </S.FormGroup>
        <S.ButtonGroup>
          <Button type="submit" variation="primary">
            Log in
          </Button>
          <Button type="button" variation="secondary">
            Sign up instead
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </S.Wrapper>
  );
}

export default LoginForm;
