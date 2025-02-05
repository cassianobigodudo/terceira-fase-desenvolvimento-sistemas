import './Produto.css'
import { GiGoldBar } from "react-icons/gi";

function Produto({img,nome,preco,descricao}) {
  return (
    <div>

        <div className="container-produto">
            <h2>{nome}</h2>
            <img src={img} className='sapato-img' />
            <p>R${preco.toFixed(2)}</p>
            <p>{descricao}</p>
            {preco > 5000 && 
                
                <div className="ultimas-unidades">
                    <p>Ultimas Unidades</p>
                    <GiGoldBar/>
                </div>
                
            }
            

        </div>

    </div>
  )
}

export default Produto
