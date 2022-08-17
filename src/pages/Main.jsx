import Item from "../components/Item/Item";
import styles from "./Main.module.scss";
import Nav from "../components/Header/Nav/Nav";
import { SearchContext } from "../App";
import { useContext, useEffect, useState } from "react";

export default function Main() {

  const {searchValue} = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: "popularity",
    prop: "rating",
  });
  const onChangeCategory = (id) =>{
    console.log(id)
  }
  const itemsArray = items.map((obj) => <Item {...obj} key={obj.id} />);

  useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : "";
    fetch(
      `https://62f4d36bac59075124c4a943.mockapi.io/items?${
        category ? `type=${category}` : ""
      }&sortby=${activeSort.prop}&order=desc${search}`
    )
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, [category, activeSort, searchValue]);
  return (
    <>
      <Nav
        category={category}
        onClickCategory={(index) => {
          setCategory(index);
        }}
        sortId={activeSort}
        onChangeSort={(index) => {
          setActiveSort(index);
        }}
      />
      <div className={styles.wrapper}>{itemsArray}</div>
    </>
  );
}
