// IMPORTAÇÕES DE PACOTES
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// IMPORTAÇÕES DE PÁGINAS:
import Autentication from './pages/Autentication';
import HomePage from './pages/HomePage';
import RegisterUnit from './pages/CadastroEmpresa';
import addUnityModal from './components/addUnityModal/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<addUnityModal />} />
        {/*<Route path='/' element={<Autentication />} />*/}
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/registerUnit' element={<RegisterUnit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
