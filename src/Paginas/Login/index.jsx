import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";

import {url} from '../../utils/constants';

import logo from '../../assets/img/Logo.svg';
import { Container, Form, Button, FormGroup } from 'react-bootstrap'
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import './index.css';

  const Login = () => {
      return (
          <div>
              <Menu />
              <Container className='form-height'>
                  <Form className='form-signin'>
                      <h1>Login</h1>
                      <small>Informe os dados abaixo</small>
                      <hr/>
                      <FormGroup controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Informe o email" required />
                      </FormGroup>
                      <FormGroup controlId="FormBasicPassWord">
                          <Form.Label>Senha</Form.Label>
                          <Form.Control type="passsword" placeholder="Senha" required/>
                      </FormGroup>
                      <Button variant="primary" type="submit">
                          Enviar
                      </Button>
                  </Form>
              </Container>
              <Rodape/>
          </div>
      )
  }
  export default Login  