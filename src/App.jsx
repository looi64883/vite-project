import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hello />
    </div>
  );
}

export default App
