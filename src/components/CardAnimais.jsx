import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style/style.css'

const CardAnimais = ({ clientes }) => {
    return (
        <div className="col-3 mb-3">
            <Card>

            <Card.Title className="text-center" >{clientes.pet}</Card.Title>
                <img src={clientes.imagem} alt={clientes.raca} className="card-img-top imagen-card" />
                <Card.Body>

                    <ListGroup className="mb-3">
                        <ListGroupItem><strong>Nome : </strong>{clientes.nome}</ListGroupItem>
                        <ListGroupItem><strong>Raça : </strong>{clientes.raca}</ListGroupItem>
                        <ListGroupItem><strong>Idade : </strong>{clientes.idade}</ListGroupItem>
                        <ListGroupItem><strong>Propietario : </strong>{clientes.propietario}</ListGroupItem>
                        <ListGroupItem><strong>Telefone : </strong>{clientes.telefone}</ListGroupItem>

                    </ListGroup>

                    <button className="btn btn-primary  me-2">Editar</button>
                    <button className="btn btn-danger me-2">Eliminar</button>
                </Card.Body>

            </Card>

        </div>
    )
}

export default CardAnimais