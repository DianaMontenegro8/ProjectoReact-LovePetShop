import axios from 'axios';
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './style/style.css'

const CardAnimais = ({clientes, setUpdateList , updateList , handleOpenModal , setDataModal}) => {

    const URL = "http://localhost:3020/clientes"

    const handleDelete = async () => {

        Swal.fire({
        title: `Você tem certeza que quer deletar ${clientes.nome} ?`,
        text:"Essa ação não pode ser desfeita!",
        icon: 'warning' ,
        showCancelButton: true,
        confirmButtonColor:'#3085d6' ,
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si , Apagalo!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`${URL}/${clientes.id}`).then((response) => {
                if (response.status === 200){
                    Swal.fire(
                       'Apagado',
                       `Você a Apagado con Exito o registro ${clientes.nome}! `,
                      'success'
                       )
                       setUpdateList (!updateList)
                }else {
                    Swal.fire (
                        'Erro',
                        "Aconteceo un Problema ao Apagar o registro",
                        'erro'
                    )
                }
         })
     }
  })
}

const handleEdit = () => {
    handleOpenModal();
    setDataModal(clientes)
}
       
    return (
        <div className="col-4 mb-1">
            <Card>
            <Card.Title className="pet" >{clientes.pet}</Card.Title>
                <img src={clientes.imagem} alt={clientes.raca} className="card-img-top imagen-card" />
                <Card.Body>

                    <ListGroup className="mb-1">
                        <ListGroupItem><strong>Nome : </strong>{clientes.nome}</ListGroupItem>
                        <ListGroupItem><strong>Raça : </strong>{clientes.raca}</ListGroupItem>
                        <ListGroupItem><strong>Idade : </strong>{clientes.idade}</ListGroupItem>
                        <ListGroupItem><strong>Propietario : </strong>{clientes.propietario}</ListGroupItem>
                        <ListGroupItem><strong>Telefone : </strong>{clientes.telefone}</ListGroupItem>

                    </ListGroup>

                    <button className="btn btn-primary  me-1" onClick={handleEdit}>Editar</button>
                    <button className="btn btn-danger me-1" onClick={handleDelete}>Eliminar</button>
                </Card.Body>

            </Card>

        </div>
    )
}

export default CardAnimais