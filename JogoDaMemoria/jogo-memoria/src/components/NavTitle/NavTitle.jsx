//REACT
import { Link } from "react-router-dom"
//CSS
import "./NavTitle.css"
//IMAGENS
import bolsa from "../../assets/imagens/bolsa1.png"

const NavTitle = () => {

  return (

    <div className="container-nav-title">

        <div className="title-memory-game">
           <img src={bolsa} alt="imagem do grupo disney" />
            <div className="title-text">
                <h2>JOGO DA MEMÓRIA</h2>
                <h3>DISNEY & TURMA DA MÔNICA</h3>
                 <Link to="/"><span>menu</span></Link>
            </div>
            <img src={bolsa} alt="imagem do grupo turma da mônica" />
        </div>
        
    </div>

  )
}

export default NavTitle