import React, { useState } from 'react';
import * as S from './styled';
import Input from '../Input';
import Button from '../Button';
import useFirebase from '../../hooks/useFirebase';

function LoginForm() {
  const { login } = useFirebase();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    form: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      login(values.email, values.password).catch(e => {
        if (e.code === 'auth/wrong-password') {
          setLoading(false);
          setFormErrors(prevErrors => ({
            ...prevErrors,
            form: 'Wrong password or email address.',
          }));
        }
      });
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
            {loading ? 'Loading...' : 'Log in'}
          </Button>
          <Button type="button" variation="secondary">
            Sign up instead
          </Button>
        </S.ButtonGroup>
        {formErrors.form && <S.FormError>{formErrors.form}</S.FormError>}
      </S.Form>
    </S.Wrapper>
  );
}

export default LoginForm;
