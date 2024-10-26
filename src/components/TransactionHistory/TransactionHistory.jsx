import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={styles.item}>
              <td className={styles.el}>{item.type}</td>
              <td className={styles.el}>{item.amount}</td>
              <td className={styles.el}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

//id, type, amount, currency
