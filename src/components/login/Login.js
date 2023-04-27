import React, { useReducer } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import classes from './Login.module.css'


const initialEmailState = {
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
}

const emailAndPasswordReducer = (state, action) => {
    if (action.type === EMAIL) {
        return {
            ...state,
            email: action.value
        }
    }
    if (action.type === PASSWORD) {
        return {
            ...state,
            password: action.value
        }
    }
    if (action.type === EMAIL_VALID) {
        return {
            ...state,
            emailValid: action.emailValue.includes("@")
        }
    }
    if (action.type === PASSWORD_VALID) {
        return {
            ...state,
            passwordValid: action.passwordValue.trim().length > 6
        }
    }
}
const EMAIL = "EMAIL"
const PASSWORD = "PASSWORD"
const EMAIL_VALID = 'EMAIL_VAlID'
const PASSWORD_VALID = 'PASSWORD_VALID'

export const Login = ({ onSubmit, onLogin }) => {
    const [emailAndPassword, dispatchEmailAndPassword] = useReducer(emailAndPasswordReducer, initialEmailState)
    const emailChangeHandler = (e) => {
        dispatchEmailAndPassword({ type: EMAIL, value: e.target.value })

    }
    const passwordChangeHandler = (e) => {
        dispatchEmailAndPassword({ type: PASSWORD, value: e.target.value })
    }
    const validateEmailHandler = () => {
        dispatchEmailAndPassword({ type: EMAIL_VALID, emailValue: emailAndPassword.email })
    }
    const validatePasswordHandler = () => {
        dispatchEmailAndPassword({ type: PASSWORD_VALID, passwordValue: emailAndPassword.password })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        onLogin(emailAndPassword.email, emailAndPassword.password)
        const user = {
            email: emailAndPassword.email,
            password: emailAndPassword.password
        }
        onSubmit(user)

    }
    return (
        <Form onSubmit={submitHandler}>
            <InputContainer className={`${emailAndPassword.emailValid === false ? classes.invalid : ""
                }`}>
                <Label htmlFor="email">E-Mail</Label>
                <Input value={emailAndPassword.email} required onBlur={validateEmailHandler} onChange={emailChangeHandler} type='email' name='email' />
            </InputContainer>
            <InputContainerTwo className={`${emailAndPassword.passwordValid === false ? classes.invalid : ""
                }`}>
                <Label htmlFor="password">Password</Label>
                <Input value={emailAndPassword.password} minLength='6' required onBlur={validatePasswordHandler} onChange={passwordChangeHandler} type='password' name='password' />
            </InputContainerTwo>
            <Button  marginTop="20px">Login</Button>
        </Form>
    )
}
const Form = styled.form`
    width: 780px;
    margin-top: 20px;
    height: 240px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 8px;
    display    :flex ;
    flex-direction: column;
    align-items: center;
`
const InputContainer = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`
const InputContainerTwo = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Input = styled.input`
    width: 560px;
    height: 30px;
    border-radius: 7px;
    border: 1px solid gray;
    font-size: 20px;

`
const Label = styled.label`
    font-size: 20px;
    font-weight: 600;
    color: gray;

`