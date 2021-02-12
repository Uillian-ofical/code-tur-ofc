import React from 'react';
import Menu from '../../componentes/menu';
import { Container, Form, Button, FormGroup } from 'react-bootstrap'
import Rodape from '../../componentes/rodape';
import './index.css';

const ResetarSenha = () => {
    return(
        <div>
            <Menu/>
            <Container classname='form-height'>
                <Form className='form signin'>
                    <h1>Esqueci a senha</h1>
                    <small>Informe os dados abaixo</small>

                    <hr/>
                    <Form.Group controlId="FormBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="informe o email" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
            <Rodape/> 
        </div>
    )
}
 export default ResetarSenha;