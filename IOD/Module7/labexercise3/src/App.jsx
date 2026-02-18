import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './Components/BitcoinRates'
import Emoji from './Components/Emoji'
import { EmojiProvider } from './Components/EmojiContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmojiProvider>
        <BitcoinRates></BitcoinRates>
        <Emoji></Emoji>
      </EmojiProvider>
    </>
  )
}

export default App
