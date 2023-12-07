import React from 'react';
import './App.css'; 
import GetImgs from './pages/detailedPage';
import Hero from './pages/hero';
import DetailedPage from './pages/detailedPage';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<GetImgs/>}/>
      <Route exact path='/hero' element={<Hero/>}/>
      <Route exact path='/hero/:id' element={<DetailedPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
