import { useState,createContext } from "react";

export const Context_GamePlay = createContext()

export const Provider_GamePlay = ({children}) => {

    const [activedGamePlay,setActivedGamePlay] = useState(0) // 0-desligado 1-ligado
    const [score,setScore] = useState(0) // PONTUAÇÃO...100 pontos por acerto de pares

    return (
        <Context_GamePlay.Provider value={{activedGamePlay,setActivedGamePlay,score,setScore}}>
            {children}
        </Context_GamePlay.Provider>
    )

}