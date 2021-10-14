import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardAnimais from './CardAnimais';
import { Container , Row } from 'react-bootstrap';


const ListAnimais = () => {

    const URL = "http://localhost:3020/clientes"

    const getData = async () => {
        const response = axios.get(URL);
        return response;

    }

    const [list, setList] = useState([])

    useEffect(() => {
        //UseEffect` Body
        getData().then((response) => {
            setList(response.data);
        })
    }, [])

    return (
        <Container className="mb-5">
            <Row>
            {
                list.map((clientes, index) => (
                <CardAnimais 
                 key= {index}
                   clientes={clientes}
                />
                ))
            }
            </Row>
        </Container>
    )
}

export default ListAnimais;