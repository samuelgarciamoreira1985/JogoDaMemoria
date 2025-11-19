//REACT
import FooterScore from "../components/FooterScore/FooterScore"
import { useState,useEffect } from "react"
//JSON
import data_cards from "../../data/dataCards.json"
//CSS
import "./GamePlay.css"

const GamePlay = () => {

  const[indexCard,setIndexCard] = useState([])

  const flipCard = (classValue,idCard) => { // VIRA A CARTA...
    const card = document.querySelector(classValue)
    card.classList.toggle("activedFlip")
  }

  const shuffleCards = (array) => { // EMBARALHA AS CARTAS...
        for (let index = array.length - 1; index > 0; index--) {
            const random = (Math.floor(Math.random() * (index + 1)))
            const item = array[index]
            const itemRandom = array[random]
            array[index] = itemRandom
            array[random] = item
          }
          
        return array
    }

    const shuffleCardsDeck = () => { // CRIA UM NOVO BARALHO COM AS CARTAS EMBARALHADAS...
      shuffleCards(data_cards)
      const newDeck = [...data_cards]
      setIndexCard(newDeck)
      console.log(data_cards)
       }

  useEffect(() => { // EMBARALHA AS CARTAS DEPOIS QUE A TELA DE JOGO FOR MONTADA...
    shuffleCardsDeck()
  },[])

  return (

    <div className="container-gameplay">

      <div className="square-cards">

        {data_cards && data_cards?.map(card => (
        <div className="group-card" key={card.idCard} style={{userSelect:"none"}} onClick={() => flipCard("." + card.classCard)}>
          <div className={card.classCard}>
            <div className="front-card"><img src={card.backCard} alt="imagem do frontal da carta1" /></div>
            <div className="back-card"><img src={card.imageCard} alt="imagem de fundo da carta1" /></div>
          </div>
        </div>
        ))}

      </div>

          <div className="footer-score">
            <FooterScore/>
          </div>

    </div>

  )

}

export default GamePlay