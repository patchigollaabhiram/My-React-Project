import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;