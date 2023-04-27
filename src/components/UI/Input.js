import React from "react";
import styled from "styled-components";
export const Input = (props) => {
  return (
    <InputContainer>
      <Label style={{ marginLeft: props.marginLeft, marginTop: props.marginTop }} htmlFor={props.id}>
        {props.children}
      </Label>
      <InputForExpense
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        style={{ marginLeft: props.marginLeft, marginRight: props.marginRight }} />
    </InputContainer>

  );
};
const InputForExpense = styled.input`
  width: 340px;
  height: 39px;
  border-radius: 8px;
  border: none;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 348px;
`
const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`