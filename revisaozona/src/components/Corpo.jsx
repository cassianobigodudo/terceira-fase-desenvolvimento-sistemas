import React, { useState } from 'react'
import './Corpo.css'
import Produto from './Produto'


function Corpo() {
  const [produtos, setProdutos] = useState([
    {
      id: Date.now(),
      nome:'Sapato',
      preco: 1344,
      descricao: 'Um sapato com um png de verdade',
      img: './sapato.png'
    },
    {
      id: Date.now()+1,
      nome:'Torradeira',
      preco: 2343,
      descricao: 'Uma torreira com um png falso',
      img: './torradeira.jpg'
    },
    {
      id: Date.now()+2,
      nome:'Golden Pan',
      preco: 10000,
      descricao: 'OMG UMA PANELA DOURADA',
      img: './goldenpan.png'
    }
  ])

  const [inputProduto, setInputProduto] = useState('')
  const [inputPreco, setInputPreco] = useState(0)
  const [inputDescricao, setInputDescricao] = useState('')

  function cadastrarProduto(){

    const produto = {
      id: Date.now(),
      nome: inputProduto ,
      preco: Number(inputPreco),
      descricao: inputDescricao,
      img: './sapato.png'
    }
    setProdutos([...produtos, produto])
  }
  return (
    <>
      <div className="corpo-container">
        <div className="card-container">
         
          {/* <Produto nome={'Sapato'} preco={1344.00} descricao={'Um sapato com um png de verdade'} img={'./sapato.png'} /> */}
          {/* <Produto nome={'Torradeira'} preco={2353.00} descricao={'Uma torreira com um png falso'} img={'./torradeira.jpg'} /> */}

        </div>

        <div className="lista-cards">

          {produtos.map((produto) => (

            <Produto key={produto.id} nome={produto.nome} preco={produto.preco} descricao={produto.descricao} img={produto.img} />

          ))}

        </div>

        <div className="formCadastro">
          <div className="inputContainer">
            <label htmlFor="">Produto:</label><input type="text"
            value = {inputProduto}
            onChange={(event) => setInputProduto(event.target.value)} />
            {/* {inputProduto} */}
          </div>
          <div className="inputContainer">
            <label htmlFor="">Preço:</label><input type="number"
            value = {inputPreco}
            onChange={(event) => setInputPreco(event.target.value)} />
          </div>
          <div className="inputContainer">
            <label htmlFor="">Descrição:</label><input type="text"
            value = {inputDescricao}
            onChange={(event) => setInputDescricao(event.target.value)} />
          </div>

          <button onClick={cadastrarProduto}>Cadastrar</button>

        </div>

      </div>
    </>
  )
}

export default Corpo
