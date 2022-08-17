import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Bucket from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import { createContext, useState } from "react";
export const SearchContext = createContext();
function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/bucket" element={<Bucket />}></Route>
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
