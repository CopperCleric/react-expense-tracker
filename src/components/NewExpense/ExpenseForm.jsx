import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //Update one state at a time
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        title:EnteredTitle,
        amount:EnteredAmount,
        date:new Date(EnteredDate)
    };

    props.onSaveExpenseData(data);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={handleTitleChange} />
        </div>
      </div>

      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={handleAmountChange}
          />
        </div>
      </div>

      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            value={EnteredDate}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
