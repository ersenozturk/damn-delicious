import {
  WrapperLeft,
  MealForm,
  Select,
  Input,
  Button,
} from "./MealSearchComp.styled";

const MealSearchComp = ({ mealTypeArr, setMeal, setMealType,mealType }) => {
  console.log(mealType)
  return (
    <WrapperLeft>
      <h2>FIND THE PERFECT RECIPE:</h2>
      <MealForm>
        <Select
          name="mealTypeArr"
          id="mealTypeArr"
          onChange={(e) => setMealType(e.target.value)}
        >
          {mealTypeArr.map((optionMeal, i) => {
            return (
              <option key={i} value={optionMeal.toLowerCase()}>
                {optionMeal}
              </option>
            );
          })}
        </Select>
        <Input onChange={(e) => setMeal(e.target.value)} />
        <Button>Search</Button>
      </MealForm>
    </WrapperLeft>
  );
};

export default MealSearchComp;
