import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import CoinPage from './pages/coin-page/CoinPage'

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
          <Route index element={<CoinPage/>} />
        </Route>
        <Route path="/bch">
          <Route index element={<CoinPage/>} />
        </Route>
        <Route path="/eth">
          <Route index element={<CoinPage/>} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
