import styled from "styled-components";
export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 50px;
gap: 10px;
`
export const Item = styled.li`
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
`
export const Btn = styled.button`
border-radius: 30px;
border: none;
padding: 10px;
background-color: black;

&:hover{
    background-color: white;
    color: black;
    transition: 100ms;
}
`