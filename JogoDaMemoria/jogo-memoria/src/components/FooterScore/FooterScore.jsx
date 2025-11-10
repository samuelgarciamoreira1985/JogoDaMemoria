//CSS
import "./FooterScore.css"
//ÍCONES
import { GiTimeBomb } from "react-icons/gi";

const FooterScore = () => {
    
  return (

    <div className="container-footer-score">

        <div className="score-gameplay">
          <h2>score x 100</h2>
        </div>

        <div className="time-gameplay">
          <h2><GiTimeBomb className="icon-time-gameplay"/> 10:09</h2>
        </div>

        <div className="frame-hits-game-play">

        </div>

    </div>

  )
}

export default FooterScore