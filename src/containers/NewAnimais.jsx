import axios from 'axios';
import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import pet2 from '../imagem/img/pet2.jfif'

const NewAnimais = () => {

    const history = useHistory();

    const [data, setData] = useState({ nome: "", pet: "", raca: "", idade: "", propietario: "", telefone: "", imagem: "" })

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value

        })
    }  

    const URL = "http://localhost:3020/clientes"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL,data);
        if (response.status === 201 ){
            Swal.fire(
                'Pronto! 😺' ,
                'Seu registro foi salvo com sucesso',
                'success'
            )
            history.push('/inicio')
        } else {
            Swal.fire(
                'Erro',
                'Você deseja continuar',
                'erro'

            )
        }
    }


    return (
        <Container className="text-center">
           
            <h1 className="text-center">Novo Cliente</h1>
            <Form
                onSubmit={handleSubmit}
                
            >
                <img src={pet2} alt= "Gatos e Cachorros" className="GatoSerfil"/>
                <hr/>
            
                <Form.Group className="mb-3 ">
                    <Form.Control
                        type="text"
                        name="nome"
                        placeholder="nome"
                        value={data.nome}
                        onChange={handleChange}
                        required
                        
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <select 
                    className="form.control"
                    name="pet"
                    onChange={handleChange}
                    >
                        <option value="">    Seleçoe Seu Animal de Estimaçao    </option>
                        <option value="Gato"> Gato </option>
                        <option value="Cachorro"> Cachorro </option>
                        </select>
                </Form.Group>
            
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="raca"
                        placeholder="Raça"
                        value={data.raca}
                        onChange={handleChange}
                        required
                        
                    />
                </Form.Group>
            
            
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="idade"
                        placeholder="Idade"
                        value={data.idade}
                        onChange={handleChange}
                        required
                        
                    />
                </Form.Group>
          
          
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="propietario"
                        placeholder="Propietario"
                        value={data.propietario}
                        onChange={handleChange}
                        required
                        
                    />
                </Form.Group>
   
   
                <Form.Group className="mb-3">
                    <Form.Control
                        type="number"
                        name="telefone"
                        placeholder="(11) 1111-1111"
                        value={data.telefone}
                        onChange={handleChange}
                        required
                        
                    />
                </Form.Group>
        
        
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="imagem"
                        placeholder="URL da Imagem"
                        value={data.imagem}
                        onChange={handleChange}
                        required
                        
                    />
                </Form.Group>
                <button className="btn btn-success">Guardar</button>
            </Form>
        </Container>
    )
}
export default NewAnimais;