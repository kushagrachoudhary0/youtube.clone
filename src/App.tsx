import React from 'react';
import "./App.css"
import Head from './Header/Head.tsx';
import '../src/Comp/Api.js'
import { BrowserRouter} from 'react-router-dom'
import { Routes,Route} from 'react-router-dom'
import Explore from './Pages/Explore.tsx';
import Shorts from './Pages/Shorts.tsx';
import Home from './Pages/Home.tsx';

function App() {
  return (
    <div>
      
     <BrowserRouter>
     <Head/>
     <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/Explore' element={  <Explore/> }/>
      <Route path='/Shorts' element={  <Shorts/> }/>
     </Routes>
     </BrowserRouter>
    </div> 
  );
}

export default App;