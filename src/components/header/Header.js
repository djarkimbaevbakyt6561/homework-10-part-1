import styled from "styled-components"
import React from "react"
import { Button } from "../UI/Button"

export const Header = ({ isLogin, onLogout, userOpen, userClose }) => {
    return (
        <HeaderContainer>
            {isLogin && (
                <ButtonContainer>
                    <Button onClick={userClose}>Expenses</Button>
                    <Button onClick={userOpen}>Users</Button>
                    <Button onClick={onLogout}>Logout</Button>
                </ButtonContainer>
            )}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
 background-color: #CC99FF;
 width: 100%;
 height: 70px;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`
const ButtonContainer = styled.div`
 width: 300px;
 display: flex;
 justify-content: space-between;
 margin-right: 15px;
`