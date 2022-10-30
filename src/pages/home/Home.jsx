import MealSearchComp from "../../components/mealSearch/MealSearchComp";
import { useState } from "react";
import { Wrapper, PurposeUL, PurposeLi, WrapperRight } from "./Home.styled";

const Home = () => {
  const app_id = "7e946d4c";
  const app_key = "96c514d9a90983230952517c6794ed10";

  const mealTypeArr = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState("");
  const [mealType, setMealType] = useState(mealTypeArr[3]);

  const baseUrl = `https://api.edamam.com/search?q=${meal}&app_id=7e946d4c&app_key=96c514d9a90983230952517c6794ed10&mealType=${mealType}`;

  return (
    <Wrapper>


      <MealSearchComp mealTypeArr={mealTypeArr} setMeal={setMeal} mealType={mealType} setMealType={setMealType}/>




      <WrapperRight>
        <h2>The main purpose of 'Damn Delicious' is;</h2>
        <PurposeUL>
          <PurposeLi to="/detail">QUICK</PurposeLi>
          <PurposeLi to="/detail">EASY</PurposeLi>
          <PurposeLi to="/detail">DELICIOUS</PurposeLi>
          <PurposeLi to="/detail">TRADITIONAL</PurposeLi>
          <PurposeLi to="/detail">HOUSEHOLD</PurposeLi>
        </PurposeUL>
      </WrapperRight>
    </Wrapper>
  );
};

export default Home;
