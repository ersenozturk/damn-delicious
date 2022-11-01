import { Main, Img, A } from "./About.styled";
import coding from "../../assets/coding.svg";

const About = () => {
  return (
    <Main>

      <Img src={coding} alt="codingSvg" />
      <h1 style={{ margin: "1rem auto" }}>
        Hi, &#128075; I'm Ersen
      </h1>
      
      <h4 style={{ margin: "1rem auto" }}>Here's I'm mentioning my best skills.</h4>
      <ul>
        <li>✅ HTML5</li>
        <li>✅ CSS3</li>
        <li>✅ JavaScript</li>
        <li>
          {" "}
          ✅ React.js 
        </li>
        <li> ✅ Python</li>
        <li>✅ SQL</li>
        <li>✅ Git </li>
        <li> ✅ Jira</li>
        <li>✅ Django</li>
        <li>✅ PostgreSQL</li>
        <li>✅ Figma</li>
      </ul>
      <h4>
        <A href="70ozturkersen@gmail.com">Send email</A> :
        70ozturkersen@gmail.com
      </h4>
    </Main>
  );
};

export default About;
