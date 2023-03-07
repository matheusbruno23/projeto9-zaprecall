import styled from "styled-components"
import cards from '../cards'
import Flashcard from "./Flashcard"
import Bottom from "./Bottom"
import { useState } from "react"



export default function Main(){
    const [contador, setContador] = useState(0)

    function flashConcluido(){
        setContador(contador +1)
    }

    return(
        <>
        <MidMenu>
            {cards.map((c, i)=>
            <Flashcard key={c.answer}
                i={i} 
                c={c}
                flashConcluido={flashConcluido}
             />
            )}
        </MidMenu>
        <Bottom NumPerguntas={cards.length} contador={contador}/>
        </>
    )
}


const MidMenu = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 100px;
`


