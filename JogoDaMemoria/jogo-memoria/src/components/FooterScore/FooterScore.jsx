//REACT
import { useState,useContext } from "react";
//CONTEXT
import { Context_GamePlay } from "../../context/GamePlayContext";
//CSS
import "./FooterScore.css"
//ÍCONES
import { GiTimeBomb } from "react-icons/gi";
import { FaPlay,FaPause  } from "react-icons/fa";
import { RiRestartFill } from "react-icons/ri";

const FooterScore = () => {

  const { activedGamePlay,setActivedGamePlay,score,setScore } = useContext(Context_GamePlay)
    
  return (

    <div className="container-footer-score">

        <div className="square-footer">

          <div className="btn-playpause-game-play">
            <button type="button">{activedGamePlay === 0 ? <FaPlay className="icon-playpause"/> : <FaPause className="icon-playpause"/>}</button>
          </div>

          <div className="btn-newgame-game-play">
            <button type="button">{activedGamePlay === 0 ? <RiRestartFill className="icon-playpause"/> : <FaPause className="icon-newgame"/>}</button>
          </div>

          <div className="time-gameplay">
            <h2><GiTimeBomb className="icon-time-gameplay"/> 10:09</h2>
          </div>

          <div className="score-gameplay">
            <h2>score x {score}</h2>
          </div>

        </div>
        

    </div>

  )
}

export default FooterScore