import React from "react";
import { Card, Container } from "react-bootstrap";
import "../components/style/style.css"
import Veterinaria from "../imagem/img/Veterinaria.jfif"
import cachorro1 from "../imagem/img/cachorro1.jpeg"
import gato1 from "../imagem/img/gato1.jpg"
import cachorro2 from "../imagem/img/cachorro2.jpeg"
import cachorro3 from "../imagem/img/cachorro3.jpeg"
import gato2 from "../imagem/img/gato2.jfif"
import cachorro4 from "../imagem/img/cachorro 4.jpeg"
import cachorro5 from "../imagem/img/cachorro5.jpeg"


const Clientes = () => {

    return (
        
            <Container fluid>
                <div >
                <Card>
                    <hr/>
                <h1> Nossos Principais Clientes</h1>
                <div className="  Clientes2 ">
                    <img className="card-img-top" src={Veterinaria} alt="Animal de Estimaçao"></img>

                </div>
                <div className="Clientes2">
                    <img className="card-img-top" src={cachorro1} alt="Animal de Estimaçao"></img>
                </div>

                <div className="Clientes2">
                <img className="card-img-top" src={gato1} alt="Animal de Estimaçao"></img>

                </div>

                <div className="Clientes2">
                <img className="card-img" src={cachorro2} alt="Animal de Estimaçao"></img>
                </div>
                <div className="Clientes2">
                <img className="card-img-top" src={cachorro3} alt="Animal de Estimaçao"></img>
                </div>

                <div className="Clientes2">
                <img className="card-img-top" src={gato2} alt="Animal de Estimaçao"></img>
                </div>

                <div className="Clientes2">
                <img className="card-img-top" src={cachorro4} alt="Animal de Estimaçao"></img>
                </div>
                <div className="Clientes2">
                <img className="card-img-top" src={cachorro5} alt="Animal de Estimaçao"></img>
                </div>
                </Card>
            </div>
            </Container>

    )
}

export default Clientes


