import MealSearchComp from "../../components/mealSearch/MealSearchComp";
import { useState } from "react";
import { Wrapper, PurposeUL, PurposeLi, WrapperRight,Oops } from "./Home.styled";
import chiefCoice from "../../assets/chiefChoice.png";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const app_id = "7e946d4c";
  const app_key = "96c514d9a90983230952517c6794ed10";
  const mealTypeArr = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [mealType, setMealType] = useState(mealTypeArr[0]);



  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&mealType=${mealType}`;

  const getData = async () => {
    if (query) {
      try {
        const req = await fetch(baseUrl);
        const res = await req.json();
        setRecipes(res.hits);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("please enter your damn delicious");
    }
  };

  return (
    
    <Wrapper>
      <MealSearchComp
        mealTypeArr={mealTypeArr}
        setQuery={setQuery}
        setMealType={setMealType}
        getData={getData}
      />

      <WrapperRight>
        {!recipes && (
          <>
            <h2>Main technologies used in this project;</h2>
            <PurposeUL>
              <PurposeLi to="/about">React</PurposeLi>
              <PurposeLi to="/about">Styled-Components</PurposeLi>
              <PurposeLi to="/about">Data Fetching</PurposeLi>
              <PurposeLi to="/about">React-Router-Dom</PurposeLi>
              <PurposeLi to="/about">HTML-CSS-Javascript</PurposeLi>
            </PurposeUL>
          </>
        )}

        {recipes?.length === 0 && (
          <Oops >
            <h2>OOOOPS! The recipe you requested was not found.</h2>
            <img  src={chiefCoice} alt="" />
          </Oops>
        )}

        {recipes?.length > 1 && <Cards recipes={recipes} />}
      </WrapperRight>
    </Wrapper>
  );
};

export default Home;
