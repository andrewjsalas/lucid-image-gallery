import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='about' element={ <About /> } />
      </Routes>
      
    </>
  );
}

export default App;
