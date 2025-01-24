import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import ItemList from './components/ItemList'
import ItemListClassComp from './components/ItemListClassComp'

function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <ItemList/> */}
      <ItemListClassComp/>
    </div>
  );
}

export default App
