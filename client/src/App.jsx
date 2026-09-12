import FoodDisplay from "./pages/UI/FoodDisplay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UILayout from "./components/UI/UILayout";
import Cart from "./pages/UI/Cart/Cart";
import Signup from "./pages/UI/Signup";
import Home from "./pages/UI/Home";
import ClientProvider from "./context/ClientProvider";
import Menu from "./pages/UI/Menu/Menu";
import UserAccount from "./pages/UI/Account/UserAccount";
import Login from "./pages/UI/Login";

function App() {
  return (
    <ClientProvider>
      <BrowserRouter>
        <Routes>
          {/* <Navbar cart={cart} /> */}
          <Route path="/" element={<UILayout />}>
            <Route index element={<Home />} />
            <Route path="foodDetails/:id" element={<FoodDisplay />} />
            <Route path="menu" element={<Menu />} />
            <Route path="account" element={<UserAccount />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ClientProvider>
  );
}

export default App;
