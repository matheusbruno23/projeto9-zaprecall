import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"


export default function Flashcard({c ,i}){
    const [viraPergunta, setViraPergunta] = useState(false) // inicio o jogo
    const [viraResposta, setViraResposta] = useState(false) // virou a carta
    const [finalizado, setFinalizado] = useState(false)

    function abrePergunta(){
        if(!finalizado){
            setViraPergunta(true)
        }

    }
    function abreResposta(){
        setViraResposta(true)
    }

    function respostaPergunta(){
        setViraPergunta(false)
        setFinalizado(true)
    }

    return (
            <>
            {!viraPergunta ? (
                    <Card> 
                        <p>{"Pergunta " + (i + 1)}</p>
                        <button>
                        <img onClick={abrePergunta} src={seta}/>
                        </button>
                    </Card>
            ) : 
            (
                <CardQuestion>  
                    {!viraResposta ? (
                        <>
                    {c.question}
                    <img onClick={abreResposta} src={virar}/>
                    </>
                    ) : (
                    <>
                {c.answer} 
                <ContainerButton>
                    <button onClick={respostaPergunta}>Não Lembrei</button>
                    <button onClick={respostaPergunta}>Quase não lembrei</button>
                    <button onClick={respostaPergunta}>Zap!</button>
                </ContainerButton>
                    </>
                    )
                    }


            </CardQuestion>
            )}
            </>
    )
}

const Card = styled.div`
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
    background-color: #FFFFFF;
}
`

const CardQuestion = styled.div`
background-color: #FFFFD4;
width: 300px;
height: 131px;
color:#333333;
font-weight: 400;
display: flex;
flex-direction: column;
justify-content: space-between;
font-size: 18px;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
margin-top: 25px;
padding: 10px;
position: relative;
img{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`

const ContainerButton = styled.div`
display: flex;
width: 280px;
justify-content: space-between;
button{
    width: 85px;
    height: 37px;
    display: flex;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Recursive';
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    background-color: red;
    border: none;
}
`