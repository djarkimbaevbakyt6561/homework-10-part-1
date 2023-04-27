import React from 'react'
import styled from 'styled-components'
const ExpensesFilter = (props) => {
    return (
        <ExpensesFilterDiv>
            <ExpensesFilterControl>
                <Button onClick={props.onClick2}>По убыванию</Button>
                <Button onClick={props.onClick}>По возрастанию</Button>
                <Label>Фильтр по году</Label>
                <Select value={props.selected} onChange={props.getValue}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </Select>
            </ExpensesFilterControl>
        </ExpensesFilterDiv>
    )
}
export default ExpensesFilter
const ExpensesFilterDiv = styled.div`
  background: #1f1f1f;
  border-radius: 12px;
  width: 780px;
  color: white;
`
const ExpensesFilterControl = styled.div`
  display: flex;
  justify-content: space-between;
`
const Button = styled.button`
  padding: 16px 18px;
  border: none;
  font-size: 16px;
  margin-top: 28px;
  margin-left: 16px;
  height: 45px;
  color: black;
  font-weight: 700;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`
const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  margin: 0;
  margin-top: 40px;
  margin-left: 16px;
  color: #ffffff;
`
const Select = styled.select`
  width: 124px;
  height: 43px;
  background: #ffffff;
  border-radius: 6px;
  color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-top: 28px;
  margin-right: 16px;   
`
