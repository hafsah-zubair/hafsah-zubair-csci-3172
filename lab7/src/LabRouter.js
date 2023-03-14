//import pages
import Profile from "./Profile";
import App from './App.js';
import Dashboard from "./Dashboard";

// importing components from react-router-dom package
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function LabRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path="/Profile" element={<Profile />} /> 
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );   
}

