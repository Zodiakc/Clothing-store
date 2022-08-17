import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.logoGroup}>
            <img src="img/logo.svg" alt="" />
            <span>ClothesForYou</span>
          </div>
        </Link>
        <Link to="/bucket">
          <img src="img/bucket.svg" alt="" />
        </Link>
      </header>
      
    </>
  );
}
