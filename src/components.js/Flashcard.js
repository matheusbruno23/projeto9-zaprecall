import { useState } from "react"
import styled from "styled-components"
import acertou from "../assets/icone_certo.png"
import quase from "../assets/icone_quase.png"
import errou from "../assets/icone_erro.png"
import seta from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"


export default function Flashcard({c ,i , flashConcluido}){
    const [viraPergunta, setViraPergunta] = useState(false) // inicio o jogo
    const [viraResposta, setViraResposta] = useState(false) // virou a carta
    const [finalizado, setFinalizado] = useState(false)
    const [correcao, setCorrecao] = useState("")
    const colors = {verde: "#2FBE34" , amarelo: "#FF922E" , vermelho:"#FF3030" , preto:"#333333"} 

    function abrePergunta(){
        if(!finalizado){
            setViraPergunta(true)
        }

    }
    function abreResposta(){
        setViraResposta(true)
    }

    function pegaIcones(){
        switch(correcao){
            case "errou":
                return errou
            case "quase":
                return quase
            case "acertou":
                return acertou
            default:
                return seta
        }
    }


    function respostaPergunta(status){
        setViraPergunta(false)
        setFinalizado(true)
        setCorrecao(status)
        flashConcluido()
    }

    return (
            <>
            {!viraPergunta ? (
                    <Card correcao={correcao} colors={colors}> 
                        <p>{"Pergunta " + (i + 1)}</p>
                        <button>
                        <img onClick={abrePergunta} src={pegaIcones()}alt="icone-pergunta"/>
                        </button>
                    </Card>
            ) : 
            (
                <CardQuestion>  
                    {!viraResposta ? (
                        <>
                    {c.question}
                    <img onClick={abreResposta} src={virar} alt="icone-virar"/>
                    </>
                    ) : (
                    <>
                {c.answer} 
                <ContainerButton>
                    <Botao cor={colors.vermelho} onClick={() => respostaPergunta("errou")}>Não Lembrei</Botao>
                    <Botao cor={colors.amarelo} onClick={() => respostaPergunta("quase")}>Quase não lembrei</Botao>
                    <Botao cor={colors.verde} onClick={() => respostaPergunta("acertou")}>Zap!</Botao>
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
    font-family: 'Recursive';
    font-weight: 700;
    color: ${props => { 
        switch(props.correcao) {    
            case "errou":
                return props.colors.vermelho
            case "quase":
                return props.colors.amarelo
            case "acertou":
                return props.colors.verde
            default:
                return props.colors.preto

        }
    }
    };
    text-decoration: ${props => props.correcao === "" ? "none" : "line-through"};
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
`

const Botao = styled.button`
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
    background-color: ${(props) => props.cor};
    border: none;
    color: #FFFFFF;
`