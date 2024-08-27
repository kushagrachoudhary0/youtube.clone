import React from 'react';
import './App.css';
import Head from './Header/Head.tsx';
import Sidebar from './Comp/Sidebar.tsx';
import '../src/Comp/Api.js'

function App() {
  return (
    <div>
     <Head/>
     <Sidebar/>
    </div>
  );
}

export default App;