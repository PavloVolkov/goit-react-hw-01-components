import styles from './friendsList.module.css';
import PropTypes from 'prop-types';
import FriendsListItem from './friendsListItem/friendsListItem';
const FriendsList = ({ friends }) => {
  return (
    <div className={styles.FriendsListWrapper}>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendsListItem
            id={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </div>
  );
};

// FriendsList.defaultProps = {
//   data: [
//     {
//       id: '-',
//       name: 'user',
//       avatar:
//         'https://yt3.ggpht.com/ytc/AAUvwniQnSWCntU5FpkgEeMsqpKqRq9d1nGZ-GwKM6iaOA=s900-c-k-c0x00ffffff-no-rj',
//       isOnline: '-',
//     },
//   ],
// };

// FriendsList.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       avatar: PropTypes.string,
//       isOnline: PropTypes.bool,
//     }),
//   ),
// };

export default FriendsList;
