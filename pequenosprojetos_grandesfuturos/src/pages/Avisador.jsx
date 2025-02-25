import React from 'react'
import './Avisador.css'

function Avisador() {
  return (
    <div className='avisador-container'>
        <div className="avisador-box">

            <div className="fenix-container">

                <img src="public\images\fenix apontando.png" alt="" className='fenix'/>
            </div>

            <div className="protesto-container">

                <img src="public\images\protesto.png" alt="" className='protesto'/>
                <label className='aviso' >Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.</label>
            </div>
        </div>
      
    </div>
  )
}

export default Avisador
