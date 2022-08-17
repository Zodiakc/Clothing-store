import { useState } from "react";
import "./Nav.scss";
import Search from "./Search/Search";
import Sort from "./Sort";

const clothes = ["All", "Jackets", "T-shirts", "Pants", "Shorts", "Shoes"];

export default function Nav({category, onClickCategory, sortId, onChangeSort}) {
  
  

  const clothesItems = clothes.map((clothe, index) => {
    return (
      <li
        onClick={() => {
          onClickCategory(index);
        }}
        
        className={category === index ? "active" : ""}
        key={index}
      >
        {clothe}
      </li>
    );
  });

  return (
    <nav className="nav">
      <ul className="nav__list">{clothesItems}</ul>
      <Search />
      <p className="nav__sort">
        <Sort sortId={sortId} onChangeSort={(index)=>{onChangeSort(index)}} />
      </p>
    </nav>
  );
}
