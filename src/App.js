import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [newExpenses, setNewExpenses] = useState(dummyExpenses);

  const expenseAddHandler = (expense) => {
    // the reason why i Use the prevExpenseList variable provided by React is to ensure that React uses the value it stored and not any other
    setNewExpenses((prevExpenseList) => {
      return [expense, ...prevExpenseList];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense OnExpenseAdd={expenseAddHandler} />
      <Expenses list={newExpenses} />
    </div>
  );
}

export default App;
