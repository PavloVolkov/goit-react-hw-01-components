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
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
Profile.defaultProps = {
  id: '-',
  name: 'user',
  avatar:
    'https://yt3.ggpht.com/ytc/AAUvwniQnSWCntU5FpkgEeMsqpKqRq9d1nGZ-GwKM6iaOA=s900-c-k-c0x00ffffff-no-rj',
  isOnline: '-',
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
