import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/ Home";
import Coin from "./pages/Coin";
import Header from "./widgets/Header";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
