import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  //   console.log({ name, tag, location, avatar, stats });

  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="Аватар пользователя" className="avatar" />
          <p className={styles.name}>@{name}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}></span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
