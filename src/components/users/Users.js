import styled from "styled-components";
import React from "react";
import { User } from "./User";

export const Users = (props) => {
    console.log(props);
    return (
        <UnorderedList>
            {props.users.map((el) => {
                return <User email={el.email} password={el.password}></User>
            })}
        </UnorderedList>
    )
}
const UnorderedList = styled.ul`
   margin: 0;
   padding: 0;
`