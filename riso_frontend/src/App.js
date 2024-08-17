// IMPORTAÇÕES DE PACOTES
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// IMPORTAÇÕES DE PÁGINAS:
import Autentication from './pages/Autentication';
import HomePage from './pages/HomePage';
import AddCollaborator from './pages/Autentication'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Autentication />} />
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/addCollabrator' element={<AddCollaborator/>}/>
      </Routes>
    </Router>
  );
}

export default App;
