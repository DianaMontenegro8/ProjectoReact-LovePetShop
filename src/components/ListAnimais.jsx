import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardAnimais from './CardAnimais'


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
        <div>
            {
                list.map((clientes) => (
                <CardAnimais 
                   clientes={clientes}
                />
                ))
            }
        </div>
    )
}

export default ListAnimais;