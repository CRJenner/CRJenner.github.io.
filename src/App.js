import './App.css';
import Header from './Components/Header';
import ExamData from './Components/ExamData';
import { Routes, Route } from 'react-router-dom';
import LocationMap from './Components/LocationMap';

function App() {

  return (
    <div className="App">
      <Header className="App-header"/>
      <Routes>
        <Route path='/' element={<ExamData />} />
        <Route path='/location' element={<LocationMap />} />
      </Routes>
      
    </div>
  );
}

export default App;
