//REACT
import { Link } from "react-router-dom"
//CSS
import "./Menu.css"
//IMAGENS
import title_turma from "../assets/imagens/Title-Turma-Da-Monica.png"

const Menu = () => {

  return (

    <div className="container-menu">
        <img src={title_turma} alt="imagem do título do menu" />
        <Link to="/gameplay"><button type="button">JOGAR</button></Link>

    </div>

  )
}

export default Menu