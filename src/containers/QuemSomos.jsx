import React from "react";
import "../components/style/style.css"
import pet from "../imagem/img/pet.jpg"

const QuemSomos = () => {

    return (
        <div className="pet">
            <hr/>
          <img src={pet}  alt="Gatos e Cachorros"   />

          <h1><br/> 🤝🏼 Nossa História 📝 <br/></h1>
            <h3 className="NossaHistoria"> 
            <br/> <strong> 💚 Love  Pet Shop 🧡 </strong> <br/> nasce do amor de seus sócios por animais de estimação. Desde pequenos,
           suas lembranças sempre são cercadas de cachorros e gatos na família. Unindo o desejo de trabalhar com o que se ama da Estetica pet,
            queremos fazer com que os animaizinhos e suas famílias tenham uma experiência incrível!
          </h3>

        </div>

    )
}

export default QuemSomos