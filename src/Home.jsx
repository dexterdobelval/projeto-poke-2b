import poke from "./assets/pokeapi_256.png"
import eevee from './assets/eevee.jpg'
import './home.css'

const Home = ()=> {
    return (
        <div className="pokeflex">
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
        </div>
    )
}

export default Home
