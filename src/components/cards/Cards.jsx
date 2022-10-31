import { useNavigate } from "react-router-dom";
import { GridCard, Card ,ImgDiv} from "./Cards.styled";
const Cards = ({ recipes }) => {
  console.log(recipes);
  const navigate = useNavigate()
  return (
    <GridCard>
      {recipes?.map((eachRecipe, i) => {
        return (
          <Card key={i} onClick={()=>navigate('./detail',{state: eachRecipe})}>
            <ImgDiv>
            <img src={eachRecipe.recipe.image} alt="" />
            </ImgDiv>
            <p>{eachRecipe.recipe.source}</p>
            <button>View Detail</button>
          </Card>
        );
      })}
    </GridCard>
  );
};

export default Cards;
