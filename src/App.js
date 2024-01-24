import React, { useState } from "react";
import "./App.css";
import ExpenseFrom from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
const App = () => {
  const [expense, setExpense] = useState([
    { id: 1, charge: "콜라", amount: 2000 },
    { id: 2, charge: "빵", amount: 1000 },
    { id: 3, charge: "맥북", amount: 2000 },
  ]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmout = (e) => {
    setAmount(e.target.valueAsNumber);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount };
      const newExpenses = [...expense, newExpense];
      setExpense(newExpenses);
      setCharge("");
      setAmount(0);
    } else {
      console.log("error");
    }
  };
  const handleDelete = (id) => {
    const newExpenses = expense.filter((expense) => expense.id !== id);
    setExpense(newExpenses);
    console.log(newExpenses);
  };

  return (
    <main className="main-container">
      <div className="sub-container">
        <h1>장바구니</h1>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* {Expense Form} */}
          <ExpenseFrom
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmout={handleAmout}
            handleSubmit={handleSubmit}
          />
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* {Expense List} */}
          <ExpenseList initalExpenses={expense} handleDelete={handleDelete} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "1rem",
          }}
        >
          <p style={{ fontSize: "2rem" }}>총합계:</p>
        </div>
      </div>
    </main>
  );
};
export default App;
