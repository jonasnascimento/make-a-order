import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../src/pages/home";
import Orders from "../src/pages/Orders"

function App() {
    return(
        <Router>
            <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        </Routes>
        </Router>
    );
}

export default App;