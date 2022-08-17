import styles from "./Item.module.scss";
export default function Main({ name, brand, price, img, type}) {
  return (
    
      <div className={styles.card} onClick={()=>console.log(type)}>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{brand}</p>
        <p>{price}$</p>
      </div>
    
  );
}
