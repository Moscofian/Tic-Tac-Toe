import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Game } from './components/Game'

function App() {

  return (
    <>
    <div>
      <h1>Tic Tac Toe</h1>
    </div>
      <Game/>
    </>
  )
}

export default App
