import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BigCats from './MyComponents/BigCats'

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>Big Cats Gallery</h1>
      <BigCats />
    </>
  )
}

export default App
