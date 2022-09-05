import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [chosenValue, setChosenValue] = useState("2021");

  let filteredExpenses = props.list.filter((expense) => {
    // eslint-disable-next-line
    return expense.date.getFullYear() == chosenValue;
  });

  const selectValueHandler = (value) => {
    setChosenValue(value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          select={chosenValue}
          onSelectChange={selectValueHandler}
        />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
