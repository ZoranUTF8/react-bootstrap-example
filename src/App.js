import React, { useState } from "react";

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Counter, RegistrationForm, TableDisplay } from "./components";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>

      <main>
        <Counter />
        <RegistrationForm />
        <TableDisplay />
      </main>
    </div>
  );
}

export default App;
