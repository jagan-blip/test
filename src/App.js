import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Navbar} from './components/navbar/navbar';
import {Main} from './components/main/main';

function App() {
  return (
    <div className="App">
      <div >
      < Navbar />
       <Main/>
      </div>
    
    </div>
  );
}

export default App;
