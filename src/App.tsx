import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from "./components/auth/logIn/logIn.tsx";
import SignUp from "./components/auth/signUp/signUp.tsx";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                    <Route index element={<LogIn />} />
                <Route
                    path="/auth/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}

export default App;