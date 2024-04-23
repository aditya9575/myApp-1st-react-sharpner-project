import React from "react";
import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

const Expenses = () => {
  return (
    <div className="expenses">
      <ExpenseItem
        date={new Date(2023, 7, 15)}
        title="Insurance"
        price={100}
      />
      <ExpenseItem date={new Date(2023, 3, 25)} title="Book" price={10} />
      <ExpenseItem date={new Date(2023, 10, 11)} title="Pen" price={1} />
      <ExpenseItem date={new Date(2023, 1, 14)} title="Laptop" price={200} />
    </div>
  );
};

export default Expenses;
