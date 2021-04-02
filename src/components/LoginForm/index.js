import React, { useState } from 'react';
import * as S from './styled';
import Input from '../Input';
import Button from '../Button';
import useFirebase from '../../hooks/useFirebase';

function LoginForm() {
  const { login, signup } = useFirebase();
  const [activeForm, setActiveForm] = useState('login');
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

  const handleToggleForm = () => {
    setActiveForm(prevState => (prevState === 'login' ? 'signup' : 'login'));
  };

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
      if (activeForm === 'login') {
        login(values.email, values.password).catch(error => {
          // error if user enters wrong password
          if (error.code === 'auth/wrong-password') {
            setLoading(false);
            setFormErrors(prevErrors => ({
              ...prevErrors,
              form: 'Wrong password or email address.',
            }));
          }
          // error if user is not found
          if (error.code === 'auth/user-not-found') {
            setLoading(false);
            setFormErrors(prevErrors => ({
              ...prevErrors,
              form: 'User not found.',
            }));
          }
        });
      }

      if (activeForm === 'signup') {
        signup(values.email, values.password).catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setLoading(false);
            setFormErrors(prevErrors => ({
              ...prevErrors,
              form: 'That email is already in use.',
            }));
          }
        });
      }
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
            {loading
              ? 'Loading...'
              : activeForm === 'login'
              ? 'Log in'
              : 'Sign up'}
          </Button>
          <Button
            type="button"
            variation="secondary"
            handleButtonClick={handleToggleForm}
          >
            {activeForm === 'login' ? 'Sign up instead' : 'Log in instead'}
          </Button>
        </S.ButtonGroup>
        {formErrors.form && <S.FormError>{formErrors.form}</S.FormError>}
      </S.Form>
    </S.Wrapper>
  );
}

export default LoginForm;
