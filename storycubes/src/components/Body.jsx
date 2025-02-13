import React, { useState } from 'react'
import './Body.css'
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
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
import { GiButterfly } from "react-icons/gi";
import { GiHollowCat } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { GiDwarfFace } from "react-icons/gi";
import { GiNuclear } from "react-icons/gi";
import { GiParasaurolophus } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { GiSmallFire } from "react-icons/gi";
import { GiRingingAlarm } from "react-icons/gi";
import { GiSuperMushroom } from "react-icons/gi";
import { GiWolfTrap } from "react-icons/gi";









import "nes.css/css/nes.min.css";

function Body() {

    const [dado, setDado] = useState(<GiPerspectiveDiceSixFacesRandom/>)
    const [arrayDadosAnteriores, setArrayDadosAnteriores] = useState([])
    const [dados, setDados] = useState([<GiAngularSpider/>, <GiBeech/>, <GiBiceps/>, <GiBoltBomb/>, <GiBriefcase/>, <GiBurn/>, <GiCommercialAirplane/>, <GiCobra/>, <GiDonkey/>, <GiDuck/>, <GiDrumKit/>, <GiButterfly/>, <GiHollowCat/>, <GiNoodles/>, <GiDwarfFace/>, <GiNuclear/>, <GiParasaurolophus/>, <GiPlagueDoctorProfile/>, <GiSmallFire/>, <GiRingingAlarm/>, <GiSuperMushroom/>, <GiWolfTrap/>])
    const [cont, setCont] = useState(12)
    

    function gerarNovoDado(){
        console.log(dados)
        let randomNumber = Math.floor(Math.random() * dados.length)
        
        if (arrayDadosAnteriores.length > 3){
            
            const updatedArray = [...arrayDadosAnteriores.slice(1), dados[randomNumber]]
            setArrayDadosAnteriores(updatedArray)
            
        }else{
            setArrayDadosAnteriores([...arrayDadosAnteriores, dados[randomNumber]])
        }
        setDado(dados[randomNumber])
        setDados([...dados.filter((img) => (img != dados[randomNumber]))])
        setCont(cont - 1)
        
        
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
        {cont > 0 ? <a className="btn"  onClick={gerarNovoDado}> {cont} dados restantes até o fim da sua história! </a> : <button type="button" className="btn" disabled>Sua história acabou!</button> }
            {/* <a className="nes-btn" href="#" onClick={gerarNovoDado}>{cont == 0 ? <Componente1 /> : <Componente2 /> }</a> */}
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
