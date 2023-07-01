import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { FaqPage } from './pages/FaqPage/FagPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='faq' element={<FaqPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
