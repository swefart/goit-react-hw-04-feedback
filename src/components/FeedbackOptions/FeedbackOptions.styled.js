import { styled } from "styled-components";


export const BtnList = styled.ul`
    list-style:none;
    display: flex;
    margin-bottom: 30px;
    width:60%;
`

export const BtnItem = styled.li`
    width:calc(100%/3);
`

export const Btn = styled.button`
width: 100%;
    padding: 2px 10px;
    background-color: grey;
    border: 1px solid orange;

    &:hover {
        background-color: green;
    }
`