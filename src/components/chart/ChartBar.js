import React from "react";
import styled from "styled-components";
const ChartBar = (props) => {
    const maxPriceForMonth = 30000;
    const persent = Math.round((props.el.currentPrice * 100) / maxPriceForMonth);
    if (persent > 100) {
        return (
            <ChartBarDiv>
                <ChartBarInner>
                    <ChartBarFill style={{ height: 100 }}></ChartBarFill>
                </ChartBarInner>
                <div className="">{props.el.label}</div>
            </ChartBarDiv>)
    } else {
        return (
            <ChartBarDiv>
                <ChartBarInner>
                    <ChartBarFill style={{ height: persent }}></ChartBarFill>
                </ChartBarInner>
                <div className="">{props.el.label}</div>
            </ChartBarDiv>
        )
    }

}
export default ChartBar
const ChartBarDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ChartBarInner = styled.div`
  background: #a892ee;
  border: 1px solid #363636;
  border-radius: 12px;
  width: 12px;
  height: 100px;
  display: flex;
  align-items: flex-end;
`
const ChartBarFill = styled.div`
  background: #4826b9;
  width: 12px;
  border-radius: 12px;
  transition: all 0.7s ease-out;
`