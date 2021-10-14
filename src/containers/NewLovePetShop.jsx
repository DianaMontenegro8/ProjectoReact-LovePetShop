import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';

const NewLovePetShop = () => {

 const [data ,setData ] = useState ({ nome: "", pet: "", raca: "", idade: "", propietaria: "", telefone: "", imagen: ""})
  
 const handlechange
 
 
 return (
        <Container>
            <h1 className="text-center">Novo Cliente</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="reference"
                        placeholder="Referencia"
                        value={data.nome}
                        onChange={handChange}
                    />
                </Form.Group>
            </Form>
        </Container>
    )
}
export default NewLovePetShop;