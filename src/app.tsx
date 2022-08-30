import { Route, Routes } from "react-router-dom";

// Pages =>
import { Home } from "@/pages";

// Service Worker =>
import ServiceWorker from "@/pwa/serviceWorker";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
      <ServiceWorker />
    </AuthContextProvider>
  );
};

export default App;
