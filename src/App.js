import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import CurrentPage from './pages/Current/CurrentPage'
import WeatherPage from './pages/Weather/WeatherPage';


function App() {

    return (
    <div className="App">
<Routes>
<Route exact path='/' element={<HomePage/> }/>
<Route exact path='/Weather' element={<WeatherPage/> }/>
<Route exact path='/Current' element={<CurrentPage/> }/>
</Routes>

    </div>
  );
}

export default App;
