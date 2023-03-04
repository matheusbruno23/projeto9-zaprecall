import styled from "styled-components"
import cards from '../cards'
import seta from "../assets/seta_play.png"

export default function Main(){
    return(
        <MidMenu>
            <Pergunta/>
        </MidMenu>
    )
}


function Pergunta(){
    return(
        cards.map((c) => 
            <CardQuestion>
               <p>{c.question}</p>
               <button>
                <img src={seta}/>
               </button>
            </CardQuestion>)

    )

}

const MidMenu = styled.div`
width: 100%;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
`

const CardQuestion = styled.div`
width: 300px;
height: 65px;
background-color: #FFFFFF;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
margin-top: 25px;
box-sizing: border-box;
padding: 22px;
display: flex;
justify-content: space-between;

p{
    color: #333333;
    font-family: 'Recursive';
    font-weight: 700;
    color: #333333;
    font-size: 16px;
}
button{
    border: none;
}

`