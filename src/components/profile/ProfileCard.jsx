import PropTypes from 'prop-types';
import styles from './profile.module.css'

const ProfileCard = ({data}) => {
    return (
        <div>
            <div className={styles.profile}>
                <div className={styles.description}>
                    <img 
                    src={data.avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                    />
                    <p className={styles.name}>{data.name}</p>
                    <p className={styles.tag}>{data.tag}</p>
                    <p className={styles.location}>{data.location}</p>
                </div>

                <ul className={styles.stats}>
                    <li>
                        <span className={styles.label}>Followers</span>
                        <span className={styles.quantity}>{data.stats.followers}</span>
                    </li>
                    <li>
                        <span className={styles.label}>Views</span>
                        <span className={styles.quantity}>{data.stats.views}</span>
                    </li>
                    <li>
                        <span className={styles.label}>Likes</span>
                        <span className={styles.quantity}>{data.stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

ProfileCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        }),
    })
};

export default ProfileCard;