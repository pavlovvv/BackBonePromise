import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Tickets from "./features/profile/Tickets/Tickets";

function App() {
    return (
        <Router>
            <Routes>
                    <Route index element={<Tickets />} />

                <Route
                    path="/profile/tickets"
                    element={<Tickets />}
                />
            </Routes>
        </Router>
    );
}

export default App;