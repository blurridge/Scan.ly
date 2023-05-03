import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AdminPage } from "./pages/AdminPage";
import { ProductPage } from "./pages/ProductPage";
import { LoginPage } from "./pages/LoginPage";
import { AuthContextProvider } from "./context/AuthContext";
import { Protected } from "./components/Protected";
import { WindowContextProvider } from "./context/WindowContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <WindowContextProvider>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route
              path="/admin"
              element={
                <Protected>
                  <AdminPage />
                </Protected>
              }
            ></Route>
            <Route
              path="/products/:productId"
              element={<ProductPage />}
            ></Route>
          </Routes>
        </WindowContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
