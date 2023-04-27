import { Button } from '../UI/Button';
import { ExpensesForm } from './ExpensesForm'
import { useState } from 'react';
import styled from 'styled-components';

export const NewExpense = ({ onSubmit }) => {
    const [showForm, setShowForm] = useState(false);
    const [containerStyle, setContainerStyle] = useState(false);

    function openAndCloseExpensesFormHandler() {
        setShowForm((prev) => !prev);
    }

    function changeButtonContainer() {
        setContainerStyle((prev) => !prev);
    }

    const ButtonContainer = containerStyle ? ButtonContainerTwo : ButtonContainerOne;

    return (
        <ButtonContainer>
            {showForm ? (
                <ExpensesForm onSubmit={onSubmit} onClick={() => {openAndCloseExpensesFormHandler(); changeButtonContainer()}} />
            ) : (
                <Button onClick={() => {openAndCloseExpensesFormHandler(); changeButtonContainer()}}>
                    Добавить новый расход
                </Button>
            )}
        </ButtonContainer>
    );
};

const ButtonContainerOne = styled.div`
    background: #ad9be9;
    border-radius: 12px;
    width: 780px;
    height: 71px;
    padding-top: 20px;
    margin-top: 20px;
`;

const ButtonContainerTwo = styled.div`
    width: 780px;
    height: 287px;
    margin-top: 20px;
    background: #ad9be9;
    border-radius: 12px;
`;