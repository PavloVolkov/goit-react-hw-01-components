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

FriendsListItem.propTypes = {};

export default FriendsListItem;
