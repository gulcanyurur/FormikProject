import {Routes,Route} from 'react-router-dom';
import './App.css';
import GenarelForm from './companents/GenarelForm';
import PortalForm from './companents/PortalForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GenarelForm/>}/>
        <Route path='/portal' element={<PortalForm/>}/>

      </Routes>
    </div>
  );
}

export default App;
