import { Routes, Route } from 'react-router-dom';

import Authentication from './pages/Authentication';
import Home from './pages/Home';
import Applications from './pages/Applications';
import ApplicationForm from './pages/ApplicationForm';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new-application" element={<ApplicationForm />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/applications/:id" element={<ApplicationForm />} />
        </Routes>
    );
}