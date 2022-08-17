import styles from "./Search.module.scss";
import { SearchContext } from "../../../../App";
import { useContext } from "react";
export default function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Type the name..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className={styles.searchInput}
      />
      {searchValue && (
        <img
          src="img/closeInput.svg"
          alt=""
          className={styles.closeImg}
          onClick={() => {
            setSearchValue("");
          }}
        />
      )}
    </div>
  );
}
