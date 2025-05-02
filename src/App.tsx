import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Tickets from "./features/profile/Tickets/Tickets";
import SaleManagerDashboard from "@/features/profile/saleManagerDashboard/SaleManagerDashboard.tsx";

function App() {
    return (
        <Router>
            <Routes>
                    <Route index element={<SaleManagerDashboard />} />

                <Route
                    path="/profile/tickets"
                    element={<Tickets />}
                />
            </Routes>
        </Router>
    );
}

export default App;