import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import MyContacts from "./components/MyContacts";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import RequestEmergencyContact from "./components/RequestEmergencyContact";
export const urlLogin = "/login";
export const urlRegister = "/register";
export const urlHome = "/home";
export const urlRequestEmergencyContact = "/";
export const urlMyContacts = "/my-contacts";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <main>
        <Routes>
          <Route path={urlHome} element={<Home />} />
          <Route
            path={urlRegister}
            element={<Register setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path={urlLogin}
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path={urlRequestEmergencyContact}
            element={<RequestEmergencyContact />}
          />
          {isAuthenticated && (
            <Route path={urlMyContacts} element={<MyContacts />} />
          )}
          <Route path="*" element={<Navigate to={urlHome} replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
