import React, { useState } from 'react'
import './Body.css'
import { FaDiceD6 } from "react-icons/fa";
import { GiAngularSpider } from "react-icons/gi";
import { GiBeech } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";
import { GiBoltBomb } from "react-icons/gi";
import { GiBriefcase } from "react-icons/gi";
import { GiBurn } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiCobra } from "react-icons/gi";
import { GiDonkey } from "react-icons/gi";
import { GiDuck } from "react-icons/gi";
import { GiDrumKit } from "react-icons/gi";







import "nes.css/css/nes.min.css";

function Body() {

    const [dado, setDado] = useState(<FaDiceD6/>)
    const [arrayDadosAnteriores, setArrayDadosAnteriores] = useState([])
    const dados = [<GiAngularSpider/>, <GiBeech/>, <GiBiceps/>, <GiBoltBomb/>, <GiBriefcase/>, <GiBurn/>, <GiCommercialAirplane/>, <GiCobra/>, <GiDonkey/>, <GiDuck/>, <GiDrumKit/>]

    function gerarNovoDado(){
        let randomNumber = Math.floor(Math.random() * dados.length)
        if (arrayDadosAnteriores.length > 3){

            const updatedArray = [...arrayDadosAnteriores.slice(1), dados[randomNumber]]
            setArrayDadosAnteriores(updatedArray)

        }else{
            setArrayDadosAnteriores([...arrayDadosAnteriores, dados[randomNumber]])
        }
        setDado(dados[randomNumber])
        
    }


  return (
    <div className='body-container'>
        <div className="descricao-jogo">
            <h3>Clique no botão abaixo do dado para gerar um novo símbolo para sua história</h3>
        </div>
        <div className="dados-div">
            {dado}
        </div>
        <div className="button-div">
            <a className="nes-btn" href="#" onClick={gerarNovoDado}>Próximo Dado!</a>
        </div>
        <div className="resultados-anteriores">

            <h4>Resultados Anteriores</h4>
            <div className="dados-aparecendo">

                {arrayDadosAnteriores[3]}{arrayDadosAnteriores[2]}{arrayDadosAnteriores[1]}{arrayDadosAnteriores[0]}

            </div>


        </div>

        
    </div>
  )
}

export default Body
