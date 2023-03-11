import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
            </Routes>
        </HashRouter>
    )
}

export default App;