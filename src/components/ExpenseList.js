import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({
  expenses,
  initalExpenses,
  
  handleDelete,
  handleEdit,
  clearItems,
}) => {
  return (
    <>
      <ul className="list">
        {initalExpenses.map((expense) => {
          return (
            <ExpenseItem
            initalExpenses={initalExpenses}
              expenses={expenses}
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {/* {expenses.length > 0 ? ( */}
      <button className="btn" onClick={clearItems}>
        목록지우기
        <MdDelete className="btn-icon" />
      </button>
      {/* ) : null} */}
    </>
  );
};

export default ExpenseList;
