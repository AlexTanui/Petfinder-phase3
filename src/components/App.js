import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AnimalList from "./AnimalList";
import Organization from "./OrganizationList";
import OrganizationDetails from "./OrganizationDetails";
import AnimalDetails from "./AnimalDetails";
import LoginForm from './Log-in';
import AddPet from "./Addpet";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="w-screen h-screen">
      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home username={username} />
                  <button id="logout" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              }
            />
            <Route path="/animalList" element={<AnimalList />} />
            <Route path="/organizationList" element={<Organization />} />
            <Route
              path="/organizationDetails/:id"
              element={<OrganizationDetails />}
            />
            <Route path="/Addpets" element={<AddPet />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animalList" element={<AnimalList />} />
            <Route path="/organizationList" element={<Organization />} />
            <Route
              path="/organizationDetails/:id"
              element={<OrganizationDetails />}
            />
            <Route path="/Addpet" element={<AddPet />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
