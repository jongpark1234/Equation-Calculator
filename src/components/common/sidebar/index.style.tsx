import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const background = styled.div`
    width: 15vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #575757;
`

export const categoryContainer = styled(Link)`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    padding-left: 5%;
    text-decoration: none;
    user-select: none;
    transition: .15s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`

export const categoryTitle = styled.span`
    font-size: 18px;
`
