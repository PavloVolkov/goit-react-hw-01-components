import ProppTypes from 'prop-types';
import styles from "./transactionHistory.module.css";

const TransactionHistory = ({data}) => {
   return <div>
                <table className={styles.transactionHistory}>
                    <thead >
                        <tr className={styles.transactionTitle}>
                            <th className={styles.transactionItem}>Type</th>
                            <th className={styles.transactionItem}>Amount</th>
                            <th className={styles.transactionItem}>Currency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({id, type, amount, currency}) => {
                            return <tr key={id} className={styles.transactionContent} >
                                        <td className={styles.transactionItem}>{type}</td>
                                        <td className={styles.transactionItem}>{amount}</td>
                                        <td className={styles.transactionItem}>{currency}</td>
                                   </tr>
                        })}
                    </tbody>
                </table>
          </div>
};

TransactionHistory.ProppTypes = {
    data: ProppTypes.arrayOf(
        ProppTypes.shape({
            id: ProppTypes.number,
            type: ProppTypes.string,
            amount: ProppTypes.string,
            currency: ProppTypes.bool
        })
    )
};

export default TransactionHistory;