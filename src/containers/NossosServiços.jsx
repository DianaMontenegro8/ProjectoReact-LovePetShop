import React from "react";
import "../components/style/style.css"
import pet1 from "../imagem/img/pet1.jpg"


const NossosServiços = () => {

    return (

        <div >
        <img src={pet1} alt="Gatos e Cachorros" className="Dibujo" />
       
           <h2 className="Lista"> Nossos Serviços</h2>
           <br/>
            <ul className="Lista">
                <li> Banho Estético </li>
                <li>Banho Medicamentoso – seguindo orientação médico-veterinária </li>
                <li>Retirada de nós do pelo</li>
                <li>Escovação Dental</li>
                <li>Limpeza de Ouvidos</li>
                <li>Corte de Unhas</li>
                <li>Escovação Profissional</li>
                <li>Hidratação</li>
                <li>Tosa Higiênica</li>
                <li>Tosa Completa</li>
            </ul>

          </div>
  
    )
}

export default NossosServiços