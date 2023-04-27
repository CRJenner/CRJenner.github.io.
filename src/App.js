import './App.css';
import Header from './Components/Header';
import ExamData from './Components/ExamData';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header className="App-header"/>
      <Routes>
        <Route path='/' element={<ExamData />}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
