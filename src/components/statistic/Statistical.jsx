import PropTypes from 'prop-types';
import styles from './statistical.module.css';
import randomColor from './randomColor';

const Statistical = ({data}) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>
            <ul className={styles.statList}>
                {data.map(({id, label, percentage}) => {
                        return  <li key={id} className={styles.item}  style={{background: `${randomColor()}`}}>
                                    <span className={styles.label}>{label}</span>
                                    <span className={styles.percentage}>{percentage} </span>
                                </li>
                })}
            </ul>
        </section>
    );
};

Statistical.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
};

export default Statistical;