import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Info, DivImg, DivExtra, DivExtra2 } from "./Detail.styled";

const Detail = () => {
  const { state } = useLocation();
  const {
    label,
    image,
    dietLabels,
    cuisineType,
    ingredientLines,
    totalNutrients,
    digest,
    calories,
    totalWeight,
    
  } = state.recipe;
  console.log(totalNutrients.CA.label);
  return (
    <Container>
      <Info>
        <div>
          <h1>{label}</h1>
          <h3>
            <b>Cuisine Type:</b> <span>{cuisineType[0].toUpperCase()}</span>
          </h3>
          <ul>
            {dietLabels?.map((dietLabel, i) => (
              <li key={i}>{dietLabel}</li>
            ))}
          </ul>
        </div>
        <DivImg>
          <img src={image} alt={label} />
        </DivImg>
      </Info>
      <DivExtra>
        <DivExtra2>
          <h4>NUTRIENTS</h4>
          <p>
            {totalNutrients.CA.label} :{Math.round(totalNutrients.CA.quantity)}
            {totalNutrients.CA.unit}
          </p>
          <p>
            {totalNutrients.CHOCDF.label} :{" "}
            {Math.round(totalNutrients.CHOCDF.quantity)}
            {totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {totalNutrients.CHOLE.label} :{" "}
            {Math.round(totalNutrients.CHOLE.quantity)}
            {totalNutrients.CHOLE.unit}
          </p>
          <p>
            {totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(totalNutrients.ENERC_KCAL.quantity)}
            {totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{totalWeight}</p>
          <p>Calories: {Math.round(calories)}</p>
          {digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </DivExtra2>
        <ul>
          <p> INGREDIENTLINES</p>
          {ingredientLines?.map((ingredientLine, i) => (
            <li key={i}>
              <span>{i + 1}</span> -{ingredientLine}
            </li>
          ))}
        </ul>
      </DivExtra>
    </Container>
  );
};

export default Detail;
