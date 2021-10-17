import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardAnimais from './CardAnimais';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';


const ListAnimais = () => {

    const URL = "http://localhost:3020/clientes"

    const getData = async () => {
        const response = axios.get(URL);
        return response;

    }


    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({})

    const handleCloseModal = () => { setShowModal(false) }
    const handleOpenModal = () => { setShowModal(true) }


    const handleChangeModal = ({target}) => {
        setDataModal({
            ...dataModal,
            [target.name] : target.value
        })

    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${URL}/${dataModal.id}` , dataModal)
        if (response.status === 200 ){
            Swal.fire(
                'Pronto! 😺' ,
                'Seu registro foi Atualizado com sucesso',
                'success'
            )

       handleCloseModal();
       setUpdateList (!updateList);

        } else {
            Swal.fire(
                'Erro',
                'houve um problema ao atualizar o registro',
                'erro'
            )
        }
    }

    useEffect(() => {
        //UseEffect` Body
        getData().then((response) => {
            setList(response.data);
        })
    }, [updateList])
    

    return (
        <Container className="mb-5">
            <Row>
                {
                    list.map((clientes, index) => (
                        <CardAnimais
                            key={index}
                            clientes={clientes}
                            setUpdateList={setUpdateList}
                            updateList={updateList}
                            handleCloseModal={handleCloseModal}
                            handleOpenModal={handleOpenModal}
                            setDataModal={setDataModal}

                        />
                    ))
                }
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Editar Dados</Modal.Title>
                </Modal.Header>
                <Form
                onSubmit = {handleSubmit}
                >
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label> Nome </Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                placeholder="nome"
                                value={dataModal.nome}
                                onChange={handleChangeModal}
                                required

                            />
                        </Form.Group>

                <Form.Group className="mb-3">
                    <select 
                    className="form.control"
                    name="pet"
                    onChange={handleChangeModal}
                    required
                   
                    >
                        <option value={dataModal.pet}>{dataModal.pet}</option>
                        <option value="Gato"> Gato </option>
                        </select>
                </Form.Group>
            
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="raca"
                        placeholder="Raça"
                        value={dataModal.raca}
                        onChange={handleChangeModal}
                        required
                        
                    />
                </Form.Group>
            
            
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="idade"
                        placeholder="Idade"
                        value={dataModal.idade}
                        onChange={handleChangeModal}
                        required
                        
                    />
                </Form.Group>
          
          
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="propietario"
                        placeholder="Propietario"
                        value={dataModal.propietario}
                        onChange={handleChangeModal}
                        required
                        
                    />
                </Form.Group>
   
   
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="telefone"
                        placeholder="(11) 1111-1111"
                        value={dataModal.telefone}
                        onChange={handleChangeModal}
                       
                        
                    />
                </Form.Group>
        
        
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="imagem"
                        placeholder="URL da Imagem"
                        value={dataModal.imagem}
                        onChange={handleChangeModal}
                        required
                        
                    />
                </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>
                            Cancelar
                        </button >
                        <button className=" btn btn-primary" type="submit">
                            Salvar
                        </button>
                    </Modal.Footer>
                </Form>

            </Modal>

        </Container>
    )
}

export default ListAnimais;