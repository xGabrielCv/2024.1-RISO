// IMPORTAÇÕES DE PACOTES
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
// IMPORTAÇÕES DE PÁGINAS:
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ecf0f1;
  }
`;

function App() {
  return (
    <Router>
        <GlobalStyle />
          <Routes>
            <Route path='/' element={<RegisterPage />} />
            <Route path='/Login' element={<LoginPage />} />
          </Routes>
      </Router>
  );
}

export default App;
