import styled from "styled-components";
export const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 50px;
gap: 10px;
padding: 30px 30px;
outline: solid white 1px;
width: 60%;
margin: 0 auto;
`
export const Input = styled.input`
border-radius: 30px;
border: none;
padding: 10px;
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