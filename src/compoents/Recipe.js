import React from "react";
import style from "./recipe.module.css";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  img,
  glass,
  instructions,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6,
  ingredient7,
  ingredient8
}) => {
  return (
    // <div className={style.recipe}>
    //   <h1>{title}</h1>
    //   <ol>
    //     {ingredients.map(ingredient => (
    //       <li>{ingredient.text}</li>
    //     ))}
    //   </ol>
    //   <p>{calories}</p>
    //   <img className={style.image} src={image} alt="" />
    // </div>
    <div className={style.recipes}>
      <div className={style.recipe}>
        <h1 className={style.name}>{title}</h1>
        <img src={img} alt="" className={style.image}></img>
      </div>
      <div className={style.info}>
        <h4>Ingredients:</h4>
        <ul className={style.list}>
          <li>{ingredient1}</li>
          <li>{ingredient2}</li>
          <li>{ingredient3}</li>
          <li>{ingredient4}</li>
          <li>{ingredient5}</li>
          <li>{ingredient6}</li>
          <li>{ingredient7}</li>
          <li>{ingredient8}</li>
        </ul>
        <p>{instructions}</p>
        <h4>
          Recommended glass:
          <br /> {glass}
        </h4>
      </div>
    </div>
  );
};

export default Recipe;
