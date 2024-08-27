import React from 'react';
import Head from './Header/Head.tsx';
import '../src/Comp/Api.js'
import { BrowserRouter} from 'react-router-dom'
import { Routes,Route} from 'react-router-dom'
import Explore from './Pages/Explore.jsx';
import Shorts from './Pages/Shorts.tsx';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={  <Head/> }/>
      <Route path='/Explore' element={  <Explore/> }/>
      <Route path='/Shorts' element={  <Shorts/> }/>
     </Routes>
     </BrowserRouter>
    </div> 
  );
}

export default App;