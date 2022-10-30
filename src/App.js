import "./App.css";
import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles/Global.styled";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
// https://api.edamam.com/search?q=egg&app_id=7e946d4c&app_key=96c514d9a90983230952517c6794ed10&mealType=dinner
