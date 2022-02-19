import React from "react";
import ExpenseItem from "../components/ExpenseItem";
import styled from "styled-components";

const Expenselist = styled.ul`
  list-style: none;
  padding: 0;
`;
const ExpenselistFallback = styled.h2`
  color: white;
  text-align: center;
`;

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <ExpenselistFallback>Found no expenses.</ExpenselistFallback>;
  }

  return (
    <Expenselist>
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Expenselist>
  );
};

export default ExpenseList;
