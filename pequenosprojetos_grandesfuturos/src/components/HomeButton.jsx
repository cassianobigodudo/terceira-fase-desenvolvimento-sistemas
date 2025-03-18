import React, { useEffect, useState } from 'react'
import './HomeButton.css'
import Button0 from './Button0'
import Avisador from '../pages/Avisador'
import Temperatura from '../pages/Temperatura'
//teste'

function HomeButton() {

    const [button0, setButton0] = useState(false)
    const [button1, setButton1] = useState(false)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)
    const [button4, setButton4] = useState(false)
    const [button5, setButton5] = useState(false)
    const [button6, setButton6] = useState(false)
    const [button7, setButton7] = useState(false)
    const [button8, setButton8] = useState(false)
    const [button9, setButton9] = useState(false)
    const [button10, setButton10] = useState(false)
    const [button11, setButton11] = useState(false)
    const [button12, setButton12] = useState(false)
    const [button13, setButton13] = useState(false)
    const [button14, setButton14] = useState(false)
    const [button15, setButton15] = useState(false)
    const [button16, setButton16] = useState(false)
    const [button17, setButton17] = useState(false)
    const [button18, setButton18] = useState(false)
    const [button19, setButton19] = useState(false)
    const [button20, setButton20] = useState(false)
    const [arrayButton, setArrayButton] = useState([button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16, button17, button18, button19, button20])

    function ativarBotoes(j) {

        
        const newArrayButton = [...arrayButton]


        for (let i = 0; i < newArrayButton.length; i++) {

            if (i == j){

                newArrayButton[i] = true

                console.log(`Array índice ${i} virou true`)

            } else {  //?(newArrayButton[i] == true) 

                newArrayButton[i] = false
                console.log(`Array índice ${i} virou false`)
            }
        }
        setArrayButton(newArrayButton)
        
        setButton0(newArrayButton[0])
        setButton1(newArrayButton[1])
        setButton2(newArrayButton[2])
        setButton2(newArrayButton[3])
        setButton2(newArrayButton[4])
        setButton2(newArrayButton[5])
        setButton2(newArrayButton[6])
        setButton2(newArrayButton[7])
        setButton2(newArrayButton[8])
        setButton2(newArrayButton[9])
        setButton2(newArrayButton[10])
        setButton2(newArrayButton[11])
        setButton2(newArrayButton[12])
        setButton2(newArrayButton[13])
        setButton2(newArrayButton[14])
        setButton2(newArrayButton[15])
        setButton2(newArrayButton[16])
        setButton2(newArrayButton[17])
        setButton2(newArrayButton[18])
        setButton2(newArrayButton[19])
        setButton2(newArrayButton[20])
    }

    useEffect(() => {
        console.log('Essse é o ArrayButton')
        console.table(arrayButton);
      }, [arrayButton])

  return (
    <div className='homebutton-container'>
        
        <div className="homebutton-oficial">

            <button className='btn' onClick={() => ativarBotoes(0)}>0: Avisador</button>
            <button className='btn' onClick={() => ativarBotoes(1)}>1: Temperatura</button>
            <button className='btn' onClick={() => ativarBotoes(2)}>2: Moedas</button>
            <button className='btn' onClick={() => ativarBotoes(3)}>3: Distância</button>
            <button className='btn' onClick={() => ativarBotoes(4)}>4: IMC</button>
            <button className='btn' onClick={() => ativarBotoes(5)}>5: Cronômetro</button>
            <button className='btn' onClick={() => ativarBotoes(6)}>6: Palavras</button>
            <button className='btn' onClick={() => ativarBotoes(7)}>7: Senhas</button>
            <button className='btn' onClick={() => ativarBotoes(8)}>8: Tempo</button>
            <button className='btn' onClick={() => ativarBotoes(9)}>9: Juros</button>
            <button className='btn' onClick={() => ativarBotoes(10)}>10: Peso</button>
            <button className='btn' onClick={() => ativarBotoes(11)}>11: Carácteres</button>
            <button className='btn' onClick={() => ativarBotoes(12)}>12: Gorjeta</button>
            <button className='btn' onClick={() => ativarBotoes(13)}>13: Velocidade</button>
            <button className='btn' onClick={() => ativarBotoes(14)}>14: Lista</button>
            <button className='btn' onClick={() => ativarBotoes(15)}>15: Área</button>
            <button className='btn' onClick={() => ativarBotoes(16)}>16: Volume</button>
            <button className='btn' onClick={() => ativarBotoes(17)}>17: Relógio</button>
            <button className='btn' onClick={() => ativarBotoes(18)}>18: Calorias</button>
            <button className='btn' onClick={() => ativarBotoes(19)}>19: Energia</button>
            <button className='btn' onClick={() => ativarBotoes(20)}>20: Jogo da Velha</button>

        </div>
        <div className="homebutton-tela">

        

        </div>
        { button0 && <Avisador/> }
        { button1 && <Temperatura/> }
        { button2 && <Avisador/> }
        { button3 && <Avisador/> }
        { button4 && <Avisador/> }
        { button5 && <Avisador/> }
        { button6 && <Avisador/> }
        { button7 && <Avisador/> }
        { button8 && <Avisador/> }
        { button9 && <Avisador/> }
        { button10 && <Avisador/> }
        { button11 && <Avisador/> }
        { button12 && <Avisador/> }
        { button13 && <Avisador/> }
        { button14 && <Avisador/> }
        { button15 && <Avisador/> }
        { button16 && <Avisador/> }
        { button17 && <Avisador/> }
        { button18 && <Avisador/> }
        { button19 && <Avisador/> }
        { button20 && <Avisador/> }
    </div>
  )
}

export default HomeButton
