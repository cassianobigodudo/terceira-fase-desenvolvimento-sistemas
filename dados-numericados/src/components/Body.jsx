import React, { useState } from 'react'
import './Body.css'

function Body() {

    const [face, setFace] = useState(6)
    const [resultado, setResultado] = useState('')

    function calcularResultado(){
        setResultado(Math.ceil(Math.random() * (face - 0) + 0))
        // let teste = Math.ceil(Math.random() * (face - 1) + 1)
        // console.log(teste)
    }

    function faceRestricao(event){

        if(event.target.value < 2){

            setFace(2)
        }else if (event.target.value > 100){

            setFace(100)
        }else{

            setFace(event.target.value)
        }

    }
    
  return (
    
    <div className='body-container'>

        <div className="box-area-container">

            <div className="box-container">
                <div className="texto-box">
                    <label className='label'>Dado pra toda obra!!!!</label>
                </div>
            <div className="escolha-faces-container">
                <label className='label-numero-faces' >Número de Faces:</label>
                <input
                className='input-number' 
                type="number" 
                min={2} max={100}
                defaultValue={face}
                onChange={faceRestricao}/>
                {/* {face} */}
                {/* <button className='button' onClick={(event) => (setFace(event.target.value))}>Setar faces</button> */}
                {/* {face} */}
                
            </div>

            <div className="dado-vazio">
                
            
                <svg xmlns="http://www.w3.org/2000/svg" width={370} height={370} viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m44.338 29.816l-5.111-20.5L18.889 3.5L3.662 18.184l5.111 20.5L29.111 44.5z" strokeWidth={1}></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m37.746 29.13l1.481-19.814l-18.415 1.898l-17.15 6.97l10.61 16.8l14.84 9.516z" strokeWidth={1}></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m37.746 29.13l-23.475 5.853l6.541-23.77zM20.812 11.215L18.889 3.5m18.857 25.63l6.592.686m-30.067 5.167l-5.498 3.7" strokeWidth={1} className='rafa' ></path></svg>
                
                
            </div>

            <div className="resultado">

                <button className='button'
                onClick={calcularResultado}>Rodar dados</button>
                <label className='label-resultado'>Seu dado foi: {resultado}</label>

            </div>


            </div>


        </div>
        
      
    </div>
  )
}

export default Body
