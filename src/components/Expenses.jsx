import ExpenseFilter from "../components/ExpenseFilter";
import ExpenseList from "../components/ExpenseList";
import ExpensesChart from "./ExpensesChart";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;


const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2020");

  const onChangeFilter = (year) => {
    setFilterValue(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  
  return (
    <li>
    <Container>
      <ExpenseFilter
        onChangeFilter={onChangeFilter}
        yearSelected={filterValue}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}/>
      
    </Container>
    </li>
  );
};

export default Expenses;
