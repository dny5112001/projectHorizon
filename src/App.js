import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Wholesaler from "./Pages/wholesalor-retailer.jsx";
import ProductCategory from "./Pages/ProductCategory.jsx";
import Login from "./Pages/Login.jsx";
import ProductList from "./Pages/ProductList.jsx";
import Categorylanding from "./Components/Categorylanding/Categorylanding.jsx";
import BuilderPage from "./Components/BuilderPage/BuilderPage.jsx";
import Homethemepage from "./Components/Homethemepage/Homethemepage.jsx";
import Themeproduct from "./Components/Themeproduct/Themeproduct.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/wholesalor-retailer" element={<Wholesaler />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/product-category/tiles"
            element={<Categorylanding category="tiles" />}
          />
          <Route
            path="/homethemepage"
            element={<Homethemepage category="tiles" />}
          />
          <Route
            path="/themeproduct"
            element={<Themeproduct category="tiles" />}
          />
          <Route
            path="/product-category/bathware"
            element={<Categorylanding category="bathware" />}
          />
          <Route
            path="/product-category/sanitaryware"
            element={<Categorylanding category="sanitaryware" />}
          />
          <Route
            path="/product-category/construction"
            element={<Categorylanding category="construction " />}
          />
          <Route
            path="/product-category/light&fittings"
            element={<Categorylanding category="light&fittings " />}
          />

          <Route
            path="/product-category/bathware/water-closets"
            element={<ProductList />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
