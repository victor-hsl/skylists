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

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
        <BackgroundImage/>
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;
