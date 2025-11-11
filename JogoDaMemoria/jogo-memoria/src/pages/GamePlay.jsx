//REACT
import FooterScore from "../components/FooterScore/FooterScore"
//CSS
import "./GamePlay.css"

const GamePlay = () => {

  const card = document.querySelector('.card-gameplay')

  const flipCard = () => {
    card.classList.toggle("activedFlip")
  }

  return (

    <div className="container-gameplay">

      <div className="group-card" onClick={flipCard}>

        <div className="card-gameplay">
          <div className="front-card">parte da frente</div>

          <div className="back-card">parte de tras</div>
        </div>

      </div>

          <div>
            <FooterScore/>
          </div>

    </div>

  )

}

export default GamePlay