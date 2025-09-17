import stylesDish from "../styles/Dish.module.css";

export default function Dish({
  dish: { tittel, pris, ingredienser, kategori },
}) {
  return (
    <div className={stylesDish.card}>
      <h3 className={stylesDish.title}>
        {tittel}
        <span className={stylesDish.price}>{pris}</span>
      </h3>
      <div className={stylesDish.ingredients}>{ingredienser}</div>
      <div className={stylesDish.category}>{kategori}</div>
    </div>
  );
}
