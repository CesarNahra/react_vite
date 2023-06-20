import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

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
      <Banner subtitle='Escolha a melhor bicicleta para você' title='Nossos produtos'/>
      <Main/>
      <Main/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
