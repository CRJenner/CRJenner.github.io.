import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import ExamData from './Components/ExamData';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header className="App-header"/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ExamData />}/>
      </Routes>
      
    </div>
  );
}

export default App;
