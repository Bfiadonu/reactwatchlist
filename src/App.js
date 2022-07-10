import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.js'
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
    <div id="wrapper">
   

    <BrowserRouter>
    <Header />
  <div>
  
    <Routes>
      <Route exact path="/" element={<Watchlist/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/watched" element={<Watched/>} />
      
    </Routes>
  </div>
</BrowserRouter>

  </div>
  </GlobalProvider>
  );
}

export default App;
