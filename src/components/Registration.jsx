import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Registration = () => {
  const [serverMessage, setServerMessage] = useState('');

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const isEmailRegistered = async (email) => {
    const res = await fetch(`http://localhost:5000/users?email=${encodeURIComponent(email)}`);
    const users = await res.json();
    return users.length > 0;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setServerMessage('');
    try {
      const exists = await isEmailRegistered(values.email);
      if (exists) {
        setServerMessage('This email is already registered.');
        setSubmitting(false);
        return;
      }

      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setServerMessage('Registration successful! You can now log in.');
      resetForm();
    } catch (error) {
      setServerMessage('An error occurred during registration.');
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="registration-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" name="username" id="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

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
              Register
            </button>
          </Form>
        )}
      </Formik>
      {serverMessage && <p className="server-message">{serverMessage}</p>}
      <p>
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </div>
  );
};

export default Registration;
