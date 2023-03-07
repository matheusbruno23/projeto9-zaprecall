import styled from "styled-components"

export default function Bottom({NumPerguntas , contador}){
    return(
        <MenuInferior>
            <h1>{contador}/{NumPerguntas} CONCLUÍDOS</h1>
        </MenuInferior>
    )
}

const MenuInferior = styled.div`
position: fixed;
bottom: 0;
left: 0;
background-color: white;
width: 100%;
height: 70px;
font-family: Recursive;
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
font-size: 18px;
color: #333333;
`