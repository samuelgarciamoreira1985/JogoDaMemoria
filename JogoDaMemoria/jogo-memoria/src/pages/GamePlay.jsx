//REACT
import FooterScore from "../components/FooterScore/FooterScore"
//CSS
import "./GamePlay.css"
//IMAGENS
import back_card_gameplay from "../assets/imagens/back-card-gameplay.png"
import monica_front_card from "../assets/imagens/cards-gameplay/monica-front-card.png"
import cebolinha_front_card from "../assets/imagens/cards-gameplay/cebolinha-front-card.png"
import cascao_front_card from "../assets/imagens/cards-gameplay/cascao-front-card.png"
import magali_front_card from "../assets/imagens/cards-gameplay/magali-front-card.png"
import chico_front_card from "../assets/imagens/cards-gameplay/chico-front-card.png"
import bidu_front_card from "../assets/imagens/cards-gameplay/bidu-front-card.png"
import penadinho_front_card from "../assets/imagens/cards-gameplay/penadinho-front-card.png"
import dorinha_front_card from "../assets/imagens/cards-gameplay/dorinha-front-card.png"
import floquinho_front_card from "../assets/imagens/cards-gameplay/floquinho-front-card.png"
import mingau_front_card from "../assets/imagens/cards-gameplay/mingau-front-card.png"
import jotalhao_front_card from "../assets/imagens/cards-gameplay/jotalhao-front-card.png"
import humberto_front_card from "../assets/imagens/cards-gameplay/humberto-front-card.png"
import sansao_front_card from "../assets/imagens/cards-gameplay/sansao-front-card.png"
import anjinho_front_card from "../assets/imagens/cards-gameplay/anjinho-front-card.png"
import dalila_front_card from "../assets/imagens/cards-gameplay/dalila-front-card.png"
import jeremias_front_card from "../assets/imagens/cards-gameplay/jeremias-front-card.png"
import horacio_front_card from "../assets/imagens/cards-gameplay/horacio-front-card.png"
import franjinha_front_card from "../assets/imagens/cards-gameplay/franjinha-front-card.png"
import { useEffect, useState } from "react"

const GamePlay = () => {

  const [isDisabledCard1,setIsDisabledCard1] = useState("all")
  const [isDisabledCard2,setIsDisabledCard2] = useState("all")
  const [isDisabledCard3,setIsDisabledCard3] = useState("all")
  const [isDisabledCard4,setIsDisabledCard4] = useState("all")
  const [isDisabledCard5,setIsDisabledCard5] = useState("all")
  const [isDisabledCard6,setIsDisabledCard6] = useState("all")
  const [isDisabledCard7,setIsDisabledCard7] = useState("all")
  const [isDisabledCard8,setIsDisabledCard8] = useState("all")
  const [isDisabledCard9,setIsDisabledCard9] = useState("all")
  const [isDisabledCard10,setIsDisabledCard10] = useState("all")

  const [attemptyCard,setAttemptyCard] = useState(0)

  const flipCard = (classValue) => { // VIRA A CARTA...
    const card = document.querySelector(classValue)
    card.classList.toggle("activedFlip")
    setTimeout(function() {
          if (classValue === ".card-gameplay1")  
              setIsDisabledCard1("none")            

          if (classValue === ".card-gameplay2")
              setIsDisabledCard2('none') 
            
          if (classValue === ".card-gameplay3")            
              setIsDisabledCard3("none")
          
          if (classValue === ".card-gameplay4")
            setIsDisabledCard4('none') 
          if (classValue === ".card-gameplay5")
          setIsDisabledCard5("none")
          if (classValue === ".card-gameplay6")
            setIsDisabledCard6('none') 
          if (classValue === ".card-gameplay7")
          setIsDisabledCard7("none")
          if (classValue === ".card-gameplay8")
            setIsDisabledCard8('none') 
          if (classValue === ".card-gameplay9")
          setIsDisabledCard9("none")
          if (classValue === ".card-gameplay10")
            setIsDisabledCard10('none') 
        },100)
  }

  const cardsGame = [ // LISTA DE CARTAS DO JOGO...   
    monica_front_card,    // 0
    cebolinha_front_card, // 1
    cascao_front_card,    // 2
    magali_front_card,    // 3
    chico_front_card,     // 4
    bidu_front_card,      // 5
    penadinho_front_card, // 6
    dorinha_front_card,   // 7
    floquinho_front_card, // 8
    mingau_front_card,    // 9
    jotalhao_front_card,  // 10 
    humberto_front_card,  // 11
    sansao_front_card,    // 12
    anjinho_front_card,   // 13
    dalila_front_card,    // 14
    jeremias_front_card,  // 15  
    horacio_front_card,   // 16
    franjinha_front_card, // 17
    monica_front_card,    // 18
    cebolinha_front_card, // 19
    cascao_front_card,    // 20
    magali_front_card,    // 21
    chico_front_card,     // 22
    bidu_front_card,      // 23
    penadinho_front_card, // 24
    dorinha_front_card,   // 25
    floquinho_front_card, // 26
    mingau_front_card,    // 27
    jotalhao_front_card,  // 28  
    humberto_front_card,  // 29
    sansao_front_card,    // 30
    anjinho_front_card,   // 31
    dalila_front_card,    // 32
    jeremias_front_card,  // 33
    horacio_front_card,   // 34
    franjinha_front_card  // 35
  ]

  const[indexCard,setIndexCard] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
    ,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])

    const shuffleCards = (array) => {
        for (let index = array.length - 1; index > 0; index--) {
            const random = (Math.floor(Math.random() * (index + 1)))
            const item = array[index]
            const itemRandom = array[random]
            array[index] = itemRandom
            array[random] = item
          }
          
        return array
    }

    const shuffleCardsDeck = () => {
      shuffleCards(indexCard)
      const newDeck = [...indexCard]
      setIndexCard(newDeck)
      console.log(indexCard)
       }

  useEffect(() => { // EMBARALHA AS CARTAS DEPOIS QUE A TELA DE JOGO FOR MONTADA...
    shuffleCardsDeck()
  },[])

  return (

    <div className="container-gameplay">

      <div className="square-cards">

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard1}} onClick={() => flipCard(".card-gameplay1")}>
          <div className="card-gameplay1">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta1" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[0]]} alt="imagem de fundo da carta1" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard2}} onClick={() => flipCard(".card-gameplay2")}>
          <div className="card-gameplay2">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta2" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[1]]} alt="imagem de fundo da carta2" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard3}} onClick={() => flipCard(".card-gameplay3")}>
          <div className="card-gameplay3">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta3" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[2]]} alt="imagem de fundo da carta3" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard4}} onClick={() => flipCard(".card-gameplay4")}>
          <div className="card-gameplay4">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta4" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[3]]} alt="imagem de fundo da carta4" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard5}} onClick={() => flipCard(".card-gameplay5")}>
          <div className="card-gameplay5">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta5" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[4]]} alt="imagem de fundo da carta5" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard6}} onClick={() => flipCard(".card-gameplay6")}>
          <div className="card-gameplay6">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta6" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[5]]} alt="imagem de fundo da carta6" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard7}} onClick={() => flipCard(".card-gameplay7")}>
          <div className="card-gameplay7">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta7" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[6]]} alt="imagem de fundo da carta7" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard8}} onClick={() => flipCard(".card-gameplay8")}>
          <div className="card-gameplay8">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta8" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[7]]} alt="imagem de fundo da carta8" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard9}} onClick={() => flipCard(".card-gameplay9")}>
          <div className="card-gameplay9">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta9" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[8]]} alt="imagem de fundo da carta9" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none",pointerEvents:isDisabledCard10}} onClick={() => flipCard(".card-gameplay10")}>
          <div className="card-gameplay10">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta10" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[9]]} alt="imagem de fundo da carta10" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay11")}>
          <div className="card-gameplay11">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta11" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[10]]} alt="imagem de fundo da carta11" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay12")}>
          <div className="card-gameplay12">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta12" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[11]]} alt="imagem de fundo da carta12" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay13")}>
          <div className="card-gameplay13">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta13" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[12]]} alt="imagem de fundo da carta13" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay14")}>
          <div className="card-gameplay14">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta14" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[13]]} alt="imagem de fundo da carta14" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay15")}>
          <div className="card-gameplay15">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta15" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[14]]} alt="imagem de fundo da carta15" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay16")}>
          <div className="card-gameplay16">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta16" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[15]]} alt="imagem de fundo da carta16" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay17")}>
          <div className="card-gameplay17">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta17" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[16]]} alt="imagem de fundo da carta17" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay18")}>
          <div className="card-gameplay18">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta18" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[17]]} alt="imagem de fundo da carta18" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay19")}>
          <div className="card-gameplay19">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta19" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[18]]} alt="imagem de fundo da carta19" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay20")}>
          <div className="card-gameplay20">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta20" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[19]]} alt="imagem de fundo da carta20" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay21")}>
          <div className="card-gameplay21">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta21" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[20]]} alt="imagem de fundo da carta21" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay22")}>
          <div className="card-gameplay22">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta22" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[21]]} alt="imagem de fundo da carta22" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay23")}>
          <div className="card-gameplay23">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta23" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[22]]} alt="imagem de fundo da carta23" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay24")}>
          <div className="card-gameplay24">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta24" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[23]]} alt="imagem de fundo da carta24" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay25")}>
          <div className="card-gameplay25">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta25" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[24]]} alt="imagem de fundo da carta25" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay26")}>
          <div className="card-gameplay26">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta26" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[25]]} alt="imagem de fundo da carta26" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay27")}>
          <div className="card-gameplay27">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta27" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[26]]} alt="imagem de fundo da carta27" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay28")}>
          <div className="card-gameplay28">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta28" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[27]]} alt="imagem de fundo da carta28" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay29")}>
          <div className="card-gameplay29">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta29" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[28]]} alt="imagem de fundo da carta29" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay30")}>
          <div className="card-gameplay30">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta30" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[29]]} alt="imagem de fundo da carta30" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay31")}>
          <div className="card-gameplay31">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta31" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[30]]} alt="imagem de fundo da carta31" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay32")}>
          <div className="card-gameplay32">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta32" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[31]]} alt="imagem de fundo da carta32" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay33")}>
          <div className="card-gameplay33">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta33" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[32]]} alt="imagem de fundo da carta33" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay34")}>
          <div className="card-gameplay34">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta34" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[33]]} alt="imagem de fundo da carta34" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay35")}>
          <div className="card-gameplay35">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta35" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[34]]} alt="imagem de fundo da carta35" /></div>
          </div>
        </div>

        <div className="group-card" style={{userSelect:"none"}} onClick={() => flipCard(".card-gameplay36")}>
          <div className="card-gameplay36">
            <div className="front-card"><img src={back_card_gameplay} alt="imagem do frontal da carta36" /></div>
            <div className="back-card"><img src={cardsGame[indexCard[35]]} alt="imagem de fundo da carta36" /></div>
          </div>
        </div>

      </div>

          <div className="footer-score">
            <FooterScore/>
          </div>

    </div>

  )

}

export default GamePlay