import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Tickets from "./features/profile/Tickets/Tickets";
import SaleManagerDashboard from "@/features/profile/saleManagerDashboard/SaleManagerDashboard.tsx";
import SupportTicketsChat from "@/features/profile/SupportTicketsChat/SupportTicketsChat.tsx";
import SupportCreateTicket from "@/features/profile/SupportCreateTicket/SupportCreateTicket.tsx";
import D_Agent_Dashboard from "./features/profile/D-Agent-Dashboard/D-Agent-Dashboard.tsx";
// import D_Admin_Dashboard from "./features/profile/D-Admin-Dashboard/D-Admin-Dashboard.tsx"
import D_Admin_Dashboard from "./features/profile/D-Admin-Dashboard/Root/D-Admin-Dashboard.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<SaleManagerDashboard />} />

        <Route path="/profile/tickets" element={<Tickets />} />
        <Route
          path="/profile/Agent-Dashboard"
          element={<D_Agent_Dashboard />}
        />
        <Route
          path="/profile/Admin_Dashboard"
          element={<D_Admin_Dashboard />}
        />

        <Route path="/profile/tickets/chat" element={<SupportTicketsChat />} />

        <Route
          path="/profile/tickets/create"
          element={<SupportCreateTicket />}
        />
      </Routes>
      /
    </Router>
  );
}

export default App;
