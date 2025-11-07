//REACT
import { Link } from "react-router-dom"
//CSS
import "./Menu.css"

const Menu = () => {

  return (

    <div>
        <Link to="/gameplay">JOGAR</Link>
        <button type="button">CONFIGURAÇÕES</button>
    </div>

  )
}

export default Menu