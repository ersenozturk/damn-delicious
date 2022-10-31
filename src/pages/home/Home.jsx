import MealSearchComp from "../../components/mealSearch/MealSearchComp";
import { useState } from "react";
import { Wrapper, PurposeUL, PurposeLi, WrapperRight } from "./Home.styled";
import chiefCoice from "../../assets/chiefChoice.png";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const app_id = "7e946d4c";
  const app_key = "96c514d9a90983230952517c6794ed10";

  const mealTypeArr = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [mealType, setMealType] = useState(mealTypeArr[0]);

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState(null);

  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&mealType=${mealType}`;

  const getData = async () => {
    if (query) {
      try {
        const req = await fetch(baseUrl);
        const res = await req.json();
        setRecipes(res.hits);
        console.log(recipes);
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
            <h2>The main purpose of 'Damn Delicious' is;</h2>
            <PurposeUL>
              <PurposeLi to="/detail">QUICK</PurposeLi>
              <PurposeLi to="/detail">EASY</PurposeLi>
              <PurposeLi to="/detail">DELICIOUS</PurposeLi>
              <PurposeLi to="/detail">TRADITIONAL</PurposeLi>
              <PurposeLi to="/detail">HOUSEHOLD</PurposeLi>
            </PurposeUL>
          </>
        )}

        {recipes?.length === 0 && (
          <div style={{textAlign:'center',gap:'1rem'}}>
            <h2 style={{marginBottom:'1rem'}}>OOOOPS! The recipe you requested was not found.</h2>
            <img style={{width:'50%',borderRadius:'5%'}} src={chiefCoice} alt="" />
          </div>
        )}

        {recipes?.length > 1 && <Cards recipes={recipes} />}
      </WrapperRight>
    </Wrapper>
  );
};

export default Home;
