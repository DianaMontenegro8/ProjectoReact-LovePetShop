import React from "react";
import { Container } from "react-bootstrap";
import ListAnimais from "../components/ListAnimais";

const App = () => {
    return (
        <Container fluid>
            
            <h1 className="text-center"> Pet Shop  Estetica Animal com o amor e o cuidado que seu Pet Merece </h1>
            <h3 className="text-center"> 🐶 Nossos Clientes 😺</h3>
            <ListAnimais />
        </Container>
    )
}

export default App;