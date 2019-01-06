import styled from 'styled-components' 

export const ListChampion = styled.header`
    position: relative;
    width: 25%;    
    overflow-y: scroll;
    height: 30vw;

`  

export const ChampioItem = styled.section`
    display: flex;
    padding: 15px;
    align-items: center;
    border-bottom: 0.5px solid #f6f6f6;
    cursor: pointer; 
    text-decoration: none;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50px;
    } 
    span{
        text-decoration: none;
        font-size: 1.5em;
        font-weight: 500;
        padding-left: 15px;
        color: #444;
    }
    a{
        text-decoration: none;
    }
`