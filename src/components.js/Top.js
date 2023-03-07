import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Top(){
    return (
    <ContainerTopo>
        <img src={logo}></img>
        <h1>ZapRecall</h1>
    </ContainerTopo>
    )
}

const ContainerTopo = styled.div`
width: 100%;
height: 152px;
display: flex;
align-items: center;
justify-content: space-evenly;
box-sizing: border-box;
font-family: 'Righteous';
font-style: normal;
padding: 30px 20px 0px 20px;
img{
    width: 52px;
}
h1{
    width: 203px;
    height: 44px;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 36px;
    text-align: center;
}
`