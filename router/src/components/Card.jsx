import React from 'react'
import './Card.css'


function Card(props) {
  return (
    <div>

        <div className="container-card">
            <h2 className='jogo-nome'>{props.nome}</h2>
            <p className='jogo-valor'>R${props.valor.toFixed(2)}</p>
            <p className='jogo-unidade'>Unidades Restantes: {props.estoque}</p>
        </div>
      
    </div>
  )
}

export default Card
