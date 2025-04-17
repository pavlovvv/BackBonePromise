import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from '@components/profile/ProfilePage';
import Layout from './MainLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<ProfilePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;