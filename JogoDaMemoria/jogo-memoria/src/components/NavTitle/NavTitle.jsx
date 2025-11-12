//REACT
import { Link } from "react-router-dom"
//CSS
import "./NavTitle.css"
//IMAGENS
import monica_title from "../../assets/imagens/monica-title.png"
import cebolinha_title from "../../assets/imagens/cebolinha-title.png"
import cascao_title from "../../assets/imagens/cascao-title.png"
import chico_title from "../../assets/imagens/chico-title.png"
import magali_title from "../../assets/imagens/magali-title.png"
import sansao_title from "../../assets/imagens/sansao-title.png"
import franjinha_title from "../../assets/imagens/franjinha-title.png"
import anjinho_title from "../../assets/imagens/anjinho-title.png"
import horacio_title from "../../assets/imagens/horacio-title.png"
import bidu_title from "../../assets/imagens/bidu-title.png"
import jotalhao_title from "../../assets/imagens/jotalhao-title.png"
import penadinho_title from "../../assets/imagens/penadinho-title.png"
import mingau_title from "../../assets/imagens/mingau-title.png"
import jeremias_title from "../../assets/imagens/jeremias-title.png"
import floquinho_title from "../../assets/imagens/floquinho-title.png"
import dorinha_title from "../../assets/imagens/dorinha-title.png"
import humberto_title from "../../assets/imagens/humberto-title.png"
import dalila_title from "../../assets/imagens/dalila-title.png"

const NavTitle = () => {

  return (

    <div className="container-nav-title">

        <div className="title-memory-game">
           

            <div className="title-text">
                <div className="img-title-left">
                  <img src={franjinha_title} alt="imagem da mônica no título" />
                  <img src={jeremias_title} alt="imagem da mônica no título" />
                  <img src={jotalhao_title} alt="imagem da mônica no título" />
                  <img src={bidu_title} alt="imagem da mônica no título" />
                  <img src={anjinho_title} alt="imagem da mônica no título" />
                  <img src={sansao_title} alt="imagem da mônica no título" />
                  <img src={cascao_title} alt="imagem da mônica no título" />
                  <img src={cebolinha_title} alt="imagem da mônica no título" />
                  <img src={monica_title} alt="imagem da mônica no título" />
                </div>

                <h2>JOGO DA MEMÓRIA</h2>

            <div className="img-title-rigth">
              <img src={chico_title} alt="imagem da mônica no título" />
              <img src={magali_title} alt="imagem da mônica no título" />
              <img src={dalila_title} alt="imagem da mônica no título" />
              <img src={horacio_title} alt="imagem da mônica no título" />
              <img src={penadinho_title} alt="imagem da mônica no título" />
              <img src={dorinha_title} alt="imagem da mônica no título" />
              <img src={mingau_title} alt="imagem da mônica no título" />
              <img src={floquinho_title} alt="imagem da mônica no título" />
              <img src={humberto_title} alt="imagem da mônica no título" />
            </div>
            </div>

           
        </div>
        
    </div>

  )
}

export default NavTitle