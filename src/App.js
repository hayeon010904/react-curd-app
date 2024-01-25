import React, { useState } from "react";
import "./App.css";
import ExpenseFrom from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
const App = () => {
  // const localItems = localStorage.getItem("Item");

  const [expenses, setExpense] = useState([
    // JSON.parse(localItems),
    { id: 1, charge: "콜라", amount: 2000 },
    { id: 2, charge: "빵", amount: 1000 },
    { id: 3, charge: "맥북", amount: 2000 },
  ]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [id, setid] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const newExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpense(newExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "아이템이 수정되었습니다" });
        // localStorage.setItem("Item", `${JSON.stringify({ newExpenses })}`);
      } else {
        const newExpense = { id: crypto.randomUUID(), charge, amount };
        const newExpenses = [...expenses, newExpense];
        setExpense(newExpenses);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다" });
        // localStorage.setItem("Item", `${JSON.stringify({ newExpenses })}`);
      }

      setCharge("");
      setAmount(0);
    } else {
      console.log("error");
      handleAlert({
        type: "danger",
        text: "charge는 빈 값일 수 없으며 amount는 0보다 커야합니다.",
      });
    }
  };
  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expenses) => expenses.id !== id);
    setExpense(newExpenses);
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다" });
    console.log(newExpenses);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setid(id);
  };
  const clearItems = () => {
    setExpense([]);
  };
  return (
    <main className="main-container">
      <div className="sub-container">
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1>장바구니</h1>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* {Expense Form} */}
          <ExpenseFrom
            edit={edit}
            charge={charge}
            amount={amount}
            handleCharge={handleCharge}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
          />
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* {Expense List} */}
          <ExpenseList
            handleEdit={handleEdit}
            initalExpenses={expenses}
            handleDelete={handleDelete}
            clearItems={clearItems}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "1rem",
          }}
        >
          <p style={{ fontSize: "2rem" }}>
            총합계:
            <span>
              {expenses.reduce((acc, curr) => {
                return (acc += curr.amount);
              }, 0)}
              원
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
