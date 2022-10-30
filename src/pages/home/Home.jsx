import {Wrapper,PurposeUL,PurposeLi} from './Home.styled'

const Home = () => {
  return (
   <Wrapper>
    <div>
      <h2>FIND THE PERFECT RECIPE:</h2>
      
    </div>
    <div>
    <h2>The main purpose of 'Damn Delicious' is;</h2>
    <PurposeUL>
      <PurposeLi to='/detail'>
        QUICK
      </PurposeLi>
      <PurposeLi to='/detail'>
        EASY
      </PurposeLi>
      <PurposeLi to='/detail'>
        DELICIOUS
      </PurposeLi>
      <PurposeLi to='/detail'>
      TRADITIONAL 
      </PurposeLi>
      <PurposeLi to='/detail'>
        HOUSEHOLD
      </PurposeLi>
    </PurposeUL>
    </div>
   </Wrapper>
  )
}

export default Home