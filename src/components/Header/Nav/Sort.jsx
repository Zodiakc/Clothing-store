import "./Nav.scss";
import { useState } from "react";
const sort = [ {name:"popularity", prop: "rating"},
{name:"price", prop: "price"}];

export default function Sort({sortId, onChangeSort}) {
  
  const [open, setOpen] = useState(false);
  const sortItems = sort.map((obj, index) => {
    return (
      <li
        onClick={() => {
          onChangeSort(obj);
          setOpen(false);
        }}
        className={sortId.prop === obj.prop ? "activeSort" : ""}
        key={obj.id}
      >
        {obj.name}
      </li>
    );
  });
  return (
    <>
      <span className="sortBy">Sort by</span><span className="nav__categories"  onClick={() => setOpen((open) => !open)}>{sortId.name}</span>
      <img
        src="img/arrow.svg"
        alt=""
        onClick={() => setOpen((open) => !open)}
      />
      {open && (
        <div className="nav__modal">
          <ul>{sortItems}</ul>
        </div>
      )}
    </>
  );
}
