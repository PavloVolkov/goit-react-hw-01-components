import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.transactionTitle}>
            <th className={styles.transactionItem}>Type</th>
            <th className={styles.transactionItem}>Amount</th>
            <th className={styles.transactionItem}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={styles.transactionContent}>
                <td className={styles.transactionItem}>{type}</td>
                <td className={styles.transactionItem}>{amount}</td>
                <td className={styles.transactionItem}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.defaultProps = {
  items: [
    {
      id: '-',
      type: 'undefined',
      amount: '-',
      currency: 'undefined',
    },
  ],
};

TransactionHistory.ProppTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.bool,
    }),
  ),
};

export default TransactionHistory;
