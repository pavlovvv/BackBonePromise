import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Tickets from "./features/profile/Tickets/Tickets";
import SaleManagerDashboard from "@/features/profile/saleManagerDashboard/SaleManagerDashboard.tsx";
import SupportTicketsChat from "@/features/profile/SupportTicketsChat/SupportTicketsChat.tsx";

function App() {
    return (
        <Router>
            <Routes>
                    <Route index element={<SaleManagerDashboard />} />

                <Route
                    path="/profile/tickets"
                    element={<Tickets />}
                />

                <Route
                    path="/profile/tickets/chat"
                    element={<SupportTicketsChat />}
                />
            </Routes>
        </Router>
    );
}

export default App;