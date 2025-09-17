import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu.jsx";
import stylesMenu from "./styles/Menu.module.css";
import Dish from "./components/Dish.jsx";
import stylesDish from "./styles/Dish.module.css";
import { menu } from "./data/menuData.js";

function App() {
  return (
    <>
      <article className={stylesMenu.menuContainer}>
        <h1>Restaurant Meny</h1>
        <ul className={stylesMenu.menuList}>
          {menu.map((dish) => {
            return <Menu key={dish.id} dish={dish} />;
          })}
        </ul>
      </article>

      <article className={stylesDish.dishContainer}>
        {menu.map((dish) => {
          return <Dish key={dish.id} dish={dish} />;
        })}
      </article>
    </>
  );
}

export default App;
