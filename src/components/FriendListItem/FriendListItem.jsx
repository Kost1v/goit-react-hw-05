import { clsx } from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const className = isOnline ? styles.online : styles.ofline;
  return (
    <div className={styles.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={className}>{isOnline ? "Online" : "Ofline"}</p>
    </div>
  );
};

export default FriendListItem;
