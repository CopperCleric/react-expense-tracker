import React from "react";
import styled from "styled-components";
import ChartBar from "../Chart/ChartBar";

const ChartClass = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Chart = (props) => {
  const arrayOfValues = props.dataPoints.map((dataPoints) => dataPoints.value);
  const totalMaximum = Math.max(...arrayOfValues);
  
  return (
    <ChartClass>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
      
    </ChartClass>
  );
};

export default Chart;
