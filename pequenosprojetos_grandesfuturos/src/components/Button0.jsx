import React, { useState } from 'react'
import './Button0.css'
import Avisador from '../pages/Avisador'

function Button0() {

    const [tela, setTela] = useState('')

  return (
    <div>

        <button className='btn' onClick={ () => (setTela(<Avisador/>))}>0: Avisador</button>
        {tela}
      
    </div>
  )
}

export default Button0
