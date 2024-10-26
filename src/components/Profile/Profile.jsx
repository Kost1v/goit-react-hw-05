import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.img} src={image} alt="User avatar" />
        <p className={styles.title}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
