import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from "./components/auth/logIn/logIn.tsx";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                    <Route index element={<LogIn />} />
            </Routes>
        </Router>
    );
}

export default App;