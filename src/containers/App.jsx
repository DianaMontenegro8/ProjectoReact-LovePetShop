import React from "react";
import { Container } from "react-bootstrap";
import ListAnimais from "../components/ListAnimais";

const App = () => {
    return (
        <Container fluid>
            <h1 className="text-center">O amor e o cuidado que seu Pet Merece</h1>
            <ListAnimais />
        </Container>
    )
}

export default App;