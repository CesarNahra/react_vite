import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';

function App() {
  const menu  = [
    {
      id: 1,
      label: 'Produtos',
      path: '/produtos'
    },
    {
      id: 2,
      label: 'Contato',
      path: '/contato'
    }
  ]
  return (
    <>
      <Header menu={menu}/>
      <ul>
        {menu.map(item => {
          return(
            <li key={item.id}>{item.label}</li>
          );
        })}
      </ul>
    </>
  )
}

export default App
