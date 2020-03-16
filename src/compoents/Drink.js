import React from "react";
import style from "./drink.module.css";

const Drink = ({ drinks }) => {
  return (
    <div className={style.alldrinks}>
      {drinks.map(drink => (
        <div key={drink.idDrink} className={style.drinks}>
          <div className={style.drink}>
            <h1 className={style.name}>{drink.strDrink}</h1>
            <img src={drink.strDrinkThumb} alt="" className={style.image} />
          </div>
          <div className={style.info}>
            <h4>Ingredients:</h4>
            <ul className={style.list}>
              <li>{drink.strIngredient1}</li>
              <li>{drink.strIngredient2}</li>
              <li>{drink.strIngredient3}</li>
              <li>{drink.strIngredient4}</li>
              <li>{drink.strIngredient5}</li>
              <li>{drink.strIngredient6}</li>
              <li>{drink.strIngredient7}</li>
              <li>{drink.strIngredient8}</li>
            </ul>
            <p>{drink.strInstructions}</p>
            <h4>
              Recommended glass:
              <br /> {drink.strGlass}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drink;
