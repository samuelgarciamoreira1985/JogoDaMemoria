//REACT
import FooterScore from "../components/FooterScore/FooterScore"
import { useState,useEffect, useContext } from "react"
//CONTEXT
import { Context_GamePlay } from "../context/GamePlayContext"
//JSON
import data_cards from "../../data/dataCards.json"
//CSS
import "./GamePlay.css"

const GamePlay = () => {

  const { match,setMatch } = useContext(Context_GamePlay)

  const[indexCard,setIndexCard] = useState([])
  const[turnCards,setTurnCards] = useState([]) // ARRAY DE CARTAS VIRADAS...

  const flipCard = (classValue,valueCard) => { // VIRA A CARTA...
    const card = document.querySelector(classValue)
    card.classList.toggle("activedFlip")
    addCardTurn(valueCard)
  }

  const addCardTurn = (cardValue) => { // ADICIONA DUAS CARTAS VIRADAS NO TURNO...
    const newCard = [...turnCards,cardValue]
    setTurnCards(newCard)
    console.log("cards virados: " + newCard.length)
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

  useEffect(() => {
    if (turnCards.length === 2) {
          if (turnCards[0] === turnCards[1]) {
            alert("deu match!")
            setMatch(match + 1)
            setTurnCards([])
          } else {
            setTurnCards([])
          }
        }
  },[turnCards])

  return (

    <div className="container-gameplay">

      <div className="square-cards">

        {data_cards && data_cards?.map(card => (
        <div className="group-card" key={card.idCard} title={card.descriptionCard} style={{userSelect:"none"}} onClick={() => flipCard("." + card.classCard,card.descriptionCard)}>
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