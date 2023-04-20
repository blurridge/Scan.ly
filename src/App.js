import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AdminPage } from "./pages/AdminPage";
import { ProductPage } from "./pages/ProductPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/Admin" element={<AdminPage />}></Route>
        <Route path="/products/:productId" element={<ProductPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
