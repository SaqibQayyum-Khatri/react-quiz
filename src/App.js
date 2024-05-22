import Quaiz from './Component/Quaiz';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Quaiz'Component={Quaiz}/>
    </Routes>
    </BrowserRouter>
    
  )
  
}

export default App;
