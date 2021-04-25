import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendsListItem.module.css';

const FriendsListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.statusRed : styles.statusBlue}></span>
      <img className={styles.avatar} src={avatar} alt="" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.defaultProps = {
  id: '-',
  name: 'user',
  avatar:
    'https://yt3.ggpht.com/ytc/AAUvwniQnSWCntU5FpkgEeMsqpKqRq9d1nGZ-GwKM6iaOA=s900-c-k-c0x00ffffff-no-rj',
  isOnline: '-',
};

FriendsListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendsListItem;
