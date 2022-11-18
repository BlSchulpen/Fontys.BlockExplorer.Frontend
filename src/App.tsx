import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Currency from './pages/currency/Currency'

function App() {
  const data = 'Data from parent';

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
        </Route>
        <Route path="/home">
          <Route index element={<Home/>} />
        </Route>
        <Route path="/btc">
          <Route index element={<Currency/>} />
        </Route>
        <Route path="/bch">
          <Route index element={<Currency/>} />
        </Route>
        <Route path="/eth">
          <Route index element={<Currency/>} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
