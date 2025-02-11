import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoginError('');
    try {
      const response = await fetch(`http://localhost:5000/users?email=${encodeURIComponent(values.email)}`);
      const users = await response.json();

      if (users.length === 0) {
        setLoginError('Invalid email or password.');
        setSubmitting(false);
        return;
      }

      const user = users[0];
      if (user.password !== values.password) {
        setLoginError('Invalid email or password.');
        setSubmitting(false);
        return;
      }

      localStorage.setItem('userId', user.id);
      navigate('/dashboard');
    } catch (error) {
      setLoginError('An error occurred during login.');
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      {loginError && <p className="error">{loginError}</p>}
      <p>
        Don't have an account? <a href="/register">Register here</a>.
      </p>
    </div>
  );
};

export default Login;
