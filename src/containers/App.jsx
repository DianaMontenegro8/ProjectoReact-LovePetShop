import React from "react";
import { Container } from "react-bootstrap";
import ListAnimais from "../components/ListAnimais";
import logo from '../imagem/img/logo.png'
import "../components/style/style.css"

const App = () => {
    return (
        <Container fluid>


            <div className="text-center">
                <img src={logo}  alt="Logo"  className="logo" />
                <br/>
                <h1>ð Love ð§¡ </h1>
                <br/>
                <h2> Pet Shop <br /> ðð Estetica Animal âï¸ð¿ <br /> Com amor e cuidado que seu Pet Merece </h2>
                <br />
                <h3>procurando a melhor forma de cuidar do seu animal de estimaÃ§Ã£o,
                    trabalhamos sem sedativos usando psicologia a favor dos peludos da casa</h3>
                <br />
            </div>

            <hr/>
            <h3 className="Titulo-Lista"> ð¶ Nossos Clientes ðº</h3>
          

            <ListAnimais />
        </Container>
    )
}

export default App;