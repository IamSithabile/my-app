import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (prop) => {
  const saveExpenseHandler = (savedExpense) => {
    console.log(savedExpense + "From New Expense");
    const expenses = {
      ...savedExpense,
      id: Math.random().toString(),
    };

    prop.OnExpenseAdd(expenses);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
