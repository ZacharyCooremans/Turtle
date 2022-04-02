import React from 'react'
import styled from 'styled-components'

function Navigation() {
    return (
        <Nav>
            <Left>
                <h1>Turtle</h1>
            </Left>

            <Right>
                <h2>About</h2>
                <h2>Login</h2>
            </Right>
        </Nav>
    )
}

const Nav = styled.div`
    display: flex ;
`
const Left = styled.div`
    width: 25%;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 25%;
    h2:hover {
        cursor: pointer;
    }
`

export default Navigation