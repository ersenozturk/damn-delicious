import {
  WrapperLeft,
  Form,
  Select,
  Input,
  Button,
} from "./MealSearchComp.styled";

const MealSearchComp = ({ mealTypeArr, setQuery, setMealType, getData }) => {
  const handleFromSubmit = (e) => {
    e.preventDefault();
    getData()
  };

  return (
    <WrapperLeft>
      <h2>FIND THE PERFECT RECIPE:</h2>
      <Form onSubmit={handleFromSubmit}>
      <Input  placeholder="Search Damn Delicious" onChange={(e) => setQuery(e.target.value)} />
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
        
        <Button type="submit">Search</Button>
      </Form>
    </WrapperLeft>
  );
};

export default MealSearchComp;
