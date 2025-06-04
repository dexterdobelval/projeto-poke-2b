import poke from "./assets/pokeapi_256.png"
import eevee from './assets/eevee.jpg'
import './home.css'
import PokeFlex from "./PokeFlex"
import PokeGrid from "./PokeGrid"
const Home = ()=> {
    return (
        <div className="home">
            <PokeFlex/>
            <PokeGrid/>
        </div>
    )
}

export default Home
