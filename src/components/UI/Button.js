import styled from "styled-components"
export const Button = (props) => {
    const {marginTop, marginRight, onClick, children } = props
    return (
        <ButtonForExpense onClick={onClick} style={{marginTop: marginTop, marginRight: marginRight }}>{children}</ButtonForExpense>
    )
}
const ButtonForExpense = styled.button`
  padding: 16px 18px;
  color: aliceblue;
  background: #7005a2;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  `