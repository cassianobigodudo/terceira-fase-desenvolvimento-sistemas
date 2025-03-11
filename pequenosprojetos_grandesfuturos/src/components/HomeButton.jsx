import React, { useState } from 'react'
import './HomeButton.css'
import Button0 from './Button0'
import Avisador from '../pages/Avisador'
//teste'

function HomeButton() {

    const [button0, setButton0] = useState(false)

    function avisador(){

        if (button0 == true){
            setButton0(false)
        }else{
            setButton0(true)
        }


    }
    

  return (
    <div className='homebutton-container'>
        
        <div className="homebutton-oficial">

            <button className='btn' onClick={avisador}>0: Avisador</button>
            <button className='btn' onClick={avisador}>1: Temperatura</button>
            <button className='btn' onClick={avisador}>2: Moedas</button>
            <button className='btn' onClick={avisador}>3: Distância</button>
            <button className='btn' onClick={avisador}>4: IMC</button>
            <button className='btn' onClick={avisador}>5: Cronômetro</button>
            <button className='btn' onClick={avisador}>6: Palavras</button>
            <button className='btn' onClick={avisador}>7: Senhas</button>
            <button className='btn' onClick={avisador}>8: Tempo</button>
            <button className='btn' onClick={avisador}>9: Juros</button>
            <button className='btn' onClick={avisador}>10: Peso</button>
            <button className='btn' onClick={avisador}>11: Carácteres</button>
            <button className='btn' onClick={avisador}>12: Gorjeta</button>
            <button className='btn' onClick={avisador}>13: Velocidade</button>
            <button className='btn' onClick={avisador}>14: Lista</button>
            <button className='btn' onClick={avisador}>15: Área</button>
            <button className='btn' onClick={avisador}>16: Volume</button>
            <button className='btn' onClick={avisador}>17: Relógio</button>
            <button className='btn' onClick={avisador}>18: Calorias</button>
            <button className='btn' onClick={avisador}>19: Energia</button>
            <button className='btn' onClick={avisador}>20: Jogo da Velha</button>

        </div>
        <div className="homebutton-tela">

        

        </div>
        { button0 && <Avisador/> }
    </div>
  )
}

export default HomeButton
