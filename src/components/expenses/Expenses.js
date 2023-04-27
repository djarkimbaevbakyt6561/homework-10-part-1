import React, { useState } from 'react'
import { ExpenseItem } from './ExpenseItem'
import ExpensesFilter from "./ExpenseFilter"
import ExpenseChart from "../chart/ExpensesChart"
import styled from 'styled-components'
export const Expenses = ({ data, onClick }) => {
    const [selectedYear, setSelectedYear] = useState('2023')
    const [sortState, setSortState] = useState(true)

    const filteredYear = data.filter((el) => el.date.getFullYear().toString() === selectedYear)

    const sortedData = filteredYear.slice().sort((a, b) => {
        if (sortState === true) {
            return a.date.getMonth() - b.date.getMonth()
        } else if (sortState === false) {
            return b.date.getMonth() - a.date.getMonth()
        }
    })

    function getSelectValue(event) {
        setSelectedYear(event.target.value)
    }

    function ascendingProduct() {
        setSortState(true)
    }

    function descendingProduct() {
        setSortState(false)
    }
    return (
        <UnorderedList>
            <ExpensesFilter onClick2={descendingProduct} onClick={ascendingProduct} getValue={getSelectValue} selected={selectedYear} />
            <ExpenseChart filteredExpenses={filteredYear} />
            {sortedData.map((el) => (
                <ExpenseItem id={el.id} key={el.id} el={el} onClick={onClick} />
            ))}
        </UnorderedList>

    )
}
const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 28px;
  margin-top: 26px;
  background: #1f1f1f;
  border-radius: 12px;
  width: 780px;
  color: white;
  padding-bottom: 28px;
  `