import { useState } from "react";
import History from "../History";
import BalanceList from "../BalanceList";
import { v4 } from "uuid";
import "./index.css";

function Form() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");
  const [transactionList, setTransactionList] = useState([]);
  function titleChanged(titleInput) {
    setTitle(titleInput);
  }
  function amountChanged(amountInput) {
    setAmount(amountInput);
  }
  function typeChanged(typeInput) {
    setType(typeInput);
  }

  function submitClicked(event) {
    event.preventDefault();
    if (title !== "" && amount !== "") {
      const newTransaction = {
        id: v4(),
        title: title,
        amount: parseInt(amount),
        type: type,
        date: new Date(),
      };
      setTransactionList((prevTransaction) => [
        ...prevTransaction,
        newTransaction,
      ]);
      setTitle("");
      setAmount("");
      setType("Income");
    } else {
      alert("Fill all inputs");
    }
  }
  function deleteTransaction(id) {
    setTransactionList((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <div className="balance-bg">
      <BalanceList transactionList={transactionList} />
      <div className="trans-history">
        <div className="form-container">
          <h3>Add Transaction</h3>
          <form className="form-bg" onSubmit={submitClicked}>
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              value={title}
              onChange={(event) => titleChanged(event.target.value)}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              type="text"
              id="amount"
              value={amount}
              placeholder="AMOUNT"
              onChange={(event) => amountChanged(event.target.value)}
            />
            <label htmlFor="type">Type</label>
            <select
              name="type"
              value={type}
              onChange={(event) => typeChanged(event.target.value)}
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <input type="submit" value="Add" />
          </form>
        </div>
        <History
          transactionList={transactionList}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}
export default Form;
