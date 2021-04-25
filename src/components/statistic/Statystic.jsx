import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistical.module.css';
import randomColor from './randomColor';

const Statystic = ({ stats, title }) => {
  return (
    <div>
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title ? title : 'Upload stats'}</h2>
        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                key={id}
                className={styles.item}
                style={{ background: `${randomColor()}` }}
              >
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage} </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Statystic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

Statystic.defaultProps = {
  id: 'none',
  label: 'none',
  percentage: 0,
};
export default Statystic;
