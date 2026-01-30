import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './MyComponents/Greeting';

function App() {
  const name = "Johnny";

  return (
    <div style={{ fontSize: "60px" }}>
      Hello <Greeting name={name} />
    </div>
  );
}

export default App;