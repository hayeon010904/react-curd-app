import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ initalExpenses, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {initalExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      <button className="btn">목록지우기</button>
    </>
  );
};

export default ExpenseList;
