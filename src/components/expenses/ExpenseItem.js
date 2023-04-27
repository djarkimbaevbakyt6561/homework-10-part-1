import styled from 'styled-components';
import ExpenseDate from './ExpenseDate'
export const ExpenseItem = ({ el, onClick, id }) => {
    return (
        <ListItem>
            <ExpenseDate date={el.date} />
            <Info>
                <TitleP>{el.title}</TitleP>
                <NumberP>$ {el.price}</NumberP>
            </Info>
            <Button onClick={() => {
                onClick(id)
            }}>Delete</Button>
        </ListItem>
    )
}
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 748px;
  height: 104px;
  background: #4b4b4b;
  border-radius: 12px;
  list-style: none;
  align-items: center;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 550px;
  justify-content: space-between;
`
const TitleP = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-left: 14px;
`
const NumberP = styled.p`
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 10px 18px;
  margin-right: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`
const Button = styled.button`
  margin-right: 10px;
  padding: 16px 18px;
  color: aliceblue;
  background: #7005a2;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  `