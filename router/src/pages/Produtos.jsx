import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import './Produto.css'

function Produtos() {

    const [produtos, setProdutos] = useState([
        { nome: 'Super Mario Bros.', valor: 59.99, estoque: 10 },
        { nome: 'The Legend of Zelda: Breath of the Wild', valor: 199.99, estoque: 5 },
        { nome: 'Minecraft', valor: 89.99, estoque: 20 },
        { nome: 'Animal Crossing: New Horizons', valor: 239.99, estoque: 8 },
        { nome: 'FIFA 23', valor: 249.99, estoque: 12 },
        { nome: 'Call of Duty: Modern Warfare II', valor: 349.99, estoque: 4 },
        { nome: 'Gran Turismo 7', valor: 199.99, estoque: 15 },
        { nome: 'God of War: Ragnarok', valor: 299.99, estoque: 6 },
        { nome: 'Horizon Forbidden West', valor: 289.99, estoque: 9 },
        { nome: 'Final Fantasy XVI', valor: 329.99, estoque: 3 },
        { nome: 'Red Dead Redemption 2', valor: 249.99, estoque: 11 },
        { nome: 'Spider-Man: Miles Morales', valor: 179.99, estoque: 18 },
        { nome: 'The Witcher 3: Wild Hunt', valor: 199.99, estoque: 13 },
        { nome: 'Elden Ring', valor: 289.99, estoque: 7 },
        { nome: 'Assassin\'s Creed Valhalla', valor: 249.99, estoque: 14 },
        { nome: 'Cyberpunk 2077', valor: 199.99, estoque: 16 },
        { nome: 'Demon\'s Souls', valor: 229.99, estoque: 5 },
        { nome: 'Resident Evil Village', valor: 249.99, estoque: 10 },
        { nome: 'Ratchet & Clank: Rift Apart', valor: 229.99, estoque: 6 },
        { nome: 'Uncharted: Legacy of Thieves Collection', valor: 169.99, estoque: 12 },
        { nome: 'Madden NFL 23', valor: 199.99, estoque: 17 },
        { nome: 'Battlefield 2042', valor: 179.99, estoque: 8 },
        { nome: 'Borderlands 3', valor: 179.99, estoque: 20 },
        { nome: 'Sekiro: Shadows Die Twice', valor: 239.99, estoque: 7 },
        { nome: 'Overwatch 2', valor: 149.99, estoque: 25 },
        { nome: 'Watch Dogs: Legion', valor: 219.99, estoque: 11 },
        { nome: 'NBA 2K23', valor: 299.99, estoque: 9 },
        { nome: 'Kingdom Hearts III', valor: 249.99, estoque: 13 },
        { nome: 'The Elder Scrolls V: Skyrim Special Edition', valor: 99.99, estoque: 18 },
        { nome: 'Star Wars Jedi: Fallen Order', valor: 179.99, estoque: 14 },
        { nome: 'Metro Exodus', valor: 199.99, estoque: 10 },
        { nome: 'Death Stranding', valor: 229.99, estoque: 6 },
        { nome: 'Dragon Age: Inquisition', valor: 179.99, estoque: 20 },
        { nome: 'The Last of Us Part II', valor: 279.99, estoque: 7 },
        { nome: 'Cuphead', valor: 129.99, estoque: 17 },
        { nome: 'Hellblade: Senua\'s Sacrifice', valor: 149.99, estoque: 12 },
        { nome: 'Dark Souls III', valor: 189.99, estoque: 16 },
        { nome: 'Bloodborne', valor: 179.99, estoque: 8 },
        { nome: 'Nier: Automata', valor: 199.99, estoque: 14 },
        { nome: 'Shenmue III', valor: 249.99, estoque: 5 },
        { nome: 'Final Fantasy VII Remake', valor: 229.99, estoque: 9 },
        { nome: 'Dragon Ball FighterZ', valor: 149.99, estoque: 13 },
        { nome: 'Tekken 7', valor: 179.99, estoque: 18 },
        { nome: 'Street Fighter V', valor: 159.99, estoque: 21 },
        { nome: 'Persona 5', valor: 189.99, estoque: 10 },
        { nome: 'Resident Evil 2 Remake', valor: 179.99, estoque: 6 },
        { nome: 'Metro 2033 Redux', valor: 139.99, estoque: 11 },
        { nome: 'Super Smash Bros. Ultimate', valor: 219.99, estoque: 17 },
        { nome: 'Pikmin 3 Deluxe', valor: 179.99, estoque: 10 },
        { nome: 'Super Mario Odyssey', valor: 259.99, estoque: 8 },
        { nome: 'Mario Kart 8 Deluxe', valor: 209.99, estoque: 22 },
        { nome: 'Luigi\'s Mansion 3', valor: 219.99, estoque: 12 },
        { nome: 'Pokémon Sword', valor: 249.99, estoque: 14 },
        { nome: 'Pokémon Shield', valor: 249.99, estoque: 13 },
        { nome: 'Fire Emblem: Three Houses', valor: 229.99, estoque: 7 },
        { nome: 'Splatoon 2', valor: 179.99, estoque: 16 },
        { nome: 'Xenoblade Chronicles 2', valor: 239.99, estoque: 9 },
        { nome: 'Octopath Traveler', valor: 199.99, estoque: 10 },
        { nome: 'Astral Chain', valor: 229.99, estoque: 14 },
        { nome: 'Bayonetta 2', valor: 159.99, estoque: 5 },
        { nome: 'The Legend of Zelda: Link\'s Awakening', valor: 199.99, estoque: 11 },
        { nome: 'Hades', valor: 179.99, estoque: 9 },
        { nome: 'Minecraft Dungeons', valor: 159.99, estoque: 13 },
        { nome: 'Super Mario Maker 2', valor: 179.99, estoque: 12 },
        { nome: 'Apex Legends', valor: 0.00, estoque: 50 },
        { nome: 'Fortnite', valor: 0.00, estoque: 50 },
        { nome: 'Valorant', valor: 0.00, estoque: 50 },
        { nome: 'League of Legends', valor: 0.00, estoque: 100 },
        { nome: 'PUBG: Battlegrounds', valor: 0.00, estoque: 30 },
        { nome: 'Rocket League', valor: 0.00, estoque: 40 },
        { nome: 'Warframe', valor: 0.00, estoque: 60 },
        { nome: 'Counter-Strike: Global Offensive', valor: 0.00, estoque: 70 },
        { nome: 'Rainbow Six Siege', valor: 0.00, estoque: 25 },
        { nome: 'World of Warcraft', valor: 0.00, estoque: 50 },
        { nome: 'Final Fantasy XIV', valor: 0.00, estoque: 20 },
        { nome: 'Minecraft Earth', valor: 0.00, estoque: 30 },
        { nome: 'Fall Guys', valor: 0.00, estoque: 40 },
        { nome: 'Genshin Impact', valor: 0.00, estoque: 50 },
        { nome: 'Among Us', valor: 0.00, estoque: 60 },
        { nome: 'Dota 2', valor: 0.00, estoque: 70 },
        { nome: 'Hunt: Showdown', valor: 149.99, estoque: 25 },
        { nome: 'Ark: Survival Evolved', valor: 179.99, estoque: 30 },
        { nome: 'Dead by Daylight', valor: 99.99, estoque: 35 },
        { nome: 'The Forest', valor: 129.99, estoque: 40 },
        { nome: 'Rust', valor: 149.99, estoque: 50 },
        { nome: 'Subnautica', valor: 139.99, estoque: 45 },
        { nome: 'Terraria', valor: 89.99, estoque: 55 },
        { nome: 'Stardew Valley', valor: 79.99, estoque: 60 },
        { nome: 'No Man\'s Sky', valor: 179.99, estoque: 35 },
        { nome: 'The Sims 4', valor: 159.99, estoque: 40 },
        { nome: 'Cities: Skylines', valor: 129.99, estoque: 45 },
        { nome: 'Kerbal Space Program', valor: 149.99, estoque: 50 },
        { nome: 'Football Manager 2023', valor: 129.99, estoque: 55 },
        { nome: 'Planet Coaster', valor: 169.99, estoque: 60 },
        { nome: 'Farming Simulator 22', valor: 129.99, estoque: 30 },
        { nome: 'Train Simulator 2022', valor: 139.99, estoque: 25 },
    ]);
    

  return (
    <div className='produto-container'>
        <Navbar/>
      <h1>Produtos</h1>
      <div className="card-container">

        {produtos.map((produto) => (

            <Card nome={produto.nome} valor={produto.valor} estoque={produto.estoque} />


        ))}

      </div>

    </div>
  )
}

export default Produtos
 