import styles from './friendsList.module.css'
import PropTypes from 'prop-types';

const FriendsList = ({data}) => {
   return <div className={styles.FriendsListWrapper}>
       {data.map(({id, name , avatar, isOnline}) => {
                    return  <li key={id} className={styles.item} >
                                {isOnline?<span className={styles.statusRed}></span>:<span className={styles.statusBlue}></span>}
                                <img className={styles.avatar} src={avatar} alt="" />
                                <p className={styles.name}>{name}</p>
                                <span></span>
                            </li>
                })}
          </div>
};

FriendsList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool
        })
    )
};

export default FriendsList;
