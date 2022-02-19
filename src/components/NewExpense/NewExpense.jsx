import "../NewExpense/NewExpense.css";
import ExpenseForm from "../NewExpense/ExpenseForm"
import React from 'react'

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
      const ExpenseData = {
          id:Math.random().toString(),
          ...enteredExpenseData
      };
      props.onAddExpense(ExpenseData);
  };
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;