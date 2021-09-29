import React from 'react'
import styled from 'styled-components'
import {Form,Button}  from 'react-bootstrap';
import { useState } from 'react';

const Wrapper = styled.div`
  min-height : 100vh
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

export default function LoginPage() {

    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnchange = e =>{
        const {name , value} = e.target;
        switch(name){
            case 'email' :
                setEmail(value);
                break;
            case 'password' :
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
      console.log(email)
      
    };

    return (
        <Wrapper>
            <Center>
                <Title>Login</Title>
                <hr/>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" 
                            name = "email" 
                            placeholder="abc@gmail.com"
                            required
                            value = {email}
                            onChange={handleOnchange}
                            />
                        <Form.Control.Feedback type="invalid">
                            Provide a valid email 
                        </Form.Control.Feedback>
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           type="password"
                           name = "password"
                           placeholder="Password"
                           value = {password}
                           onChange={handleOnchange}
                           required/>
                        <Form.Control.Feedback type="invalid">
                            Password is required
                        </Form.Control.Feedback>
                    
                    </Form.Group>

                    <Button type="submit">Login</Button>


                </Form>
            </Center>
        </Wrapper>
    )
}
