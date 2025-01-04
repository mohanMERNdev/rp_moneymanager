import "./index.css";

function BalanceList({ transactionList }) {
  const totalIncome = transactionList
    .filter((transaction) => transaction.type === "Income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpense = transactionList
    .filter((transaction) => transaction.type === "Expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="balancelist-bg">
      <div className="balance-card1">
        <div>
          <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" />
        </div>
        <div>
          <p>Your Balance</p>
          <p>Rs.{balance}</p>
        </div>
      </div>

      <div className="balance-card2">
        <div>
          <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png " />
        </div>
        <div>
          <p>Your Income</p>
          <p>Rs.{totalIncome}</p>
        </div>
      </div>

      <div className="balance-card3">
        <div>
          <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png " />
        </div>
        <div>
          <p>Your Expense</p>
          <p>Rs.{totalExpense}</p>
        </div>
      </div>
    </div>
  );
}
export default BalanceList;
