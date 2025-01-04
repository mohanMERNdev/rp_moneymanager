import "./index.css";

function History({ transactionList, deleteTransaction }) {
  return (
    <div>
      <h3>History</h3>
      <table>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date</th>
        </tr>
        {transactionList.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.type}</td>
            <td>{transaction.date.toLocaleDateString()}</td>
            <td>
              <button
                className="del-button"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <img
                  className="delete-img"
                  src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
                />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default History;
