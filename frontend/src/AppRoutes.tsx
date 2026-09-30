import { Routes, Route } from 'react-router-dom';

import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';
import NewApplication from './pages/NewApplication';
import Applications from './pages/Applications';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-application" element={<NewApplication />} />
            <Route path="/applications" element={<Applications />} />
        </Routes>
    );
}