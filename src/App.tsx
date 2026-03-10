import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/ Home";
import Coin from "./pages/Coin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
