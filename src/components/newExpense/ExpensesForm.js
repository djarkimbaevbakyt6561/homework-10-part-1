import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';


export const ExpensesForm = ({ onClick, onSubmit }) => {
    const [inputText, setInputText] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputDate, setInputDate] = useState('');
    function getInputValue(e) {
        setInputText(e.target.value);
    }

    function getInputNumber(e) {
        setInputNumber(e.target.value);
    }

    function getInputDate(e) {
        setInputDate(e.target.value);
    }

    function submitHandler(e) {
        const convertedDate = new Date(inputDate);
        e.preventDefault();
        const product = {
            title: inputText,
            price: +inputNumber,
            date: convertedDate,
            id: Math.random()
        };
        onSubmit(product);
        setInputText('');
        setInputNumber('');
        setInputDate('');
    }
    return (
        <Form>
            <NumberText>
                <Input
                    marginTop='30px'
                    marginLeft='10px'
                    onChange={getInputValue}
                    placeholder='Заголовок'
                    type='text'
                    value={inputText}
                >
                    Заголовок
                </Input>
                <Input
                    marginTop='30px'
                    onChange={getInputNumber}
                    placeholder='Количество'
                    type='number'
                    value={inputNumber}
                >
                    Количество
                </Input>
            </NumberText>
            <Input
                marginTop='20px'
                marginLeft='40px'
                onChange={getInputDate}
                placeholder='Датировать'
                type='date'
                value={inputDate}
            >
                Датировать
            </Input>
            <ButtonCont>
                <Button marginRight='14px' onClick={onClick}>
                    Отмена
                </Button>
                <Button marginRight='35px' onClick={submitHandler} type='submit'>
                    Добавить расходы
                </Button>
            </ButtonCont>


        </Form>
    );
};
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const NumberText = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const ButtonCont = styled.div`
    margin-top: 28px;
    display: flex;
    justify-content: flex-end;
`