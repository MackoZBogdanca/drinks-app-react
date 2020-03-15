// import React from "react";
// import style from "./drink.module.css";

// const Drink = ({
//   title,
//   calories,
//   image,
//   ingredients,
//   img,
//   glass,
//   instructions,
//   ingredient1,
//   ingredient2,
//   ingredient3,
//   ingredient4,
//   ingredient5,
//   ingredient6,
//   ingredient7,
//   ingredient8
// }) => {
//   console.log(id);

//   return (
//     // <div className={style.recipe}>
//     //   <h1>{title}</h1>
//     //   <ol>
//     //     {ingredients.map(ingredient => (
//     //       <li>{ingredient.text}</li>
//     //     ))}
//     //   </ol>
//     //   <p>{calories}</p>
//     //   <img className={style.image} src={image} alt="" />
//     // </div>
//     <div className={style.drinks}>
//       <div className={style.drink}>
//         <h1 className={style.name}>{title}</h1>
//         <img src={img} alt="" className={style.image}></img>
//       </div>
//       <div className={style.info}>
//         <h4>Ingredients:</h4>
//         <ul className={style.list}>
//           <li>{ingredient1}</li>
//           <li>{ingredient2}</li>
//           <li>{ingredient3}</li>
//           <li>{ingredient4}</li>
//           <li>{ingredient5}</li>
//           <li>{ingredient6}</li>
//           <li>{ingredient7}</li>
//           <li>{ingredient8}</li>
//         </ul>
//         <p>{instructions}</p>
//         <h4>
//           Recommended glass:
//           <br /> {glass}
//         </h4>
//       </div>
//     </div>
//   );
// };

// export default Drink;

import React from "react";
import style from "./drink.module.css";

const Drink = ({ drinks }) => {
  console.log(drinks);

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
