import styled from "styled-components"

export default function Bottom(){
    return(
        <MenuInferior>
            <Contador/>
        </MenuInferior>
    )
}

function Contador(){
    return(
        <div>
            <h1>0/4 CONCLUÍDOS</h1>
        </div>

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