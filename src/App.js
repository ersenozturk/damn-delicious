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
