import React from 'react'
import styled from 'styled-components'
import {Form,Button,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";



const schema = yup.object().shape({
  firstName: yup.string()
  .required()
  .min(2, "*Name must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required("*Name is required"),
  email: yup.string().required(),
  phone: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});


const Wrapper = styled.div`
  height : 100vh
`;

const Center = styled.div`
  position : absolute;
  padding: 2em;
  background: papayawhip;
  top : 50%;
  left : 50%;
  transform : translate(-50%, -50%);
  border-radius :10px;
  box-shadow: 0px 0px 15px -5px grey

`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  justify-content:center;

  
`;
export default function SignUp() {
    return (
      <Wrapper>
        <Center>
        <Title>Register</Title>
                <hr/>
        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        isValid,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-2">
            <Form.Group as={Col} md="6" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid" >{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                // isValid={touched.lastName && !errors.lastName}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="6" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                value={values.email}
                onChange={handleChange}
                isInValid={!!errors.email}
              />
             <Form.Control.Feedback type = "invalid">{errors.email}</Form.Control.Feedback> 
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="lastName">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                isInValid={!!errors.phone}
              />

              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback> 
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
        </Center>
      </Wrapper>
    )
}
