import styles from "./Cart.module.scss"
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>Cart is empty</h1>
      <img src="img/cartEmpty.png" alt="" className={styles.cartImg}/>
      <Link to="/"><button className={styles.homeButton}>Home</button></Link>
    </div>
  );
}
