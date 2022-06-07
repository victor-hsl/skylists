import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './template/header';
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './util/usePersistedState';
import BackgroundImage from './components/backgroundImage';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Rotas from './Router'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  padding-bottom: 20px;
  ::-webkit-scrollbar {
    background: transparent;
  }
`;
function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BackgroundImage/>
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
        <Router>
          <Rotas/>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
