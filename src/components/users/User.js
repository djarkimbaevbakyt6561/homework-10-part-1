import styled from "styled-components";
import React from "react";

export const User = (props) => {
    return (
        <ListItem>
            <Email>Email: {props.email}</Email>
            <Password>Password: {props.password}</Password>
        </ListItem>
    )
}
const ListItem = styled.li`
  width: 560px;
  height: 120px;
  background: rgb(173, 155, 233);
  border-radius: 12px;
  list-style: none;
  margin-top: 20px;
`
const Email = styled.p`
  color: white;
  margin: 0;
  padding-top:20px ;
  font-size: 20px;

`
const Password = styled.p`
  color: white;
  margin: 0;
  margin-top:20px ;
  font-size: 20px;

`