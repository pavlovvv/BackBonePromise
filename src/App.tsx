import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Tickets from "./features/profile/Tickets/Tickets";
import D_Sale_manager_Dashboard from "@/features/profile/D_Sale_manager_Dashboard/Root/D_Sale_manager_Dashboard.tsx";
import SupportTicketsChat from "@/features/profile/SupportTicketsChat/SupportTicketsChat.tsx";
import SupportCreateTicket from "@/features/profile/SupportCreateTicket/SupportCreateTicket.tsx";
import D_Agent_dashboard from "./features/profile/D-Agent-Dashboard/Root/D-Agent-Dashboard.tsx";
// import D_Admin_Dashboard from "./features/profile/D-Admin-Dashboard/D-Admin-Dashboard.tsx"
import D_Admin_Dashboard from "./features/profile/D-Admin-Dashboard/Root/D-Admin-Dashboard.tsx";
import PopUp_DeletePage from "../src/components/common/popUp/popUp_Delete/popUp_DeletePage.tsx";
import CardPopUp_Page from "./components/common/popUp/popUp_Card/CardPopUp_Page.tsx";
import PasswordPopupsContainer from "./components/common/popUp/popUp_Password/PasswordPopupsContainer.tsx";
import { AddressPage } from "./components/common/popUp/popUp_Address/AddressPage.tsx";
import { PaymentPage } from "./components/common/popUp/popUp_AddPaymentMethod/PaymentPage.tsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<D_Sale_manager_Dashboard />} />

        <Route path="/profile/tickets" element={<Tickets />} />
        <Route
          path="/profile/Agent-Dashboard"
          element={<D_Agent_dashboard />}
        />
        <Route
          path="/profile/Admin_Dashboard"
          element={<D_Admin_Dashboard />}
        />

        <Route path="/profile/tickets/chat" element={<SupportTicketsChat />} />


        <Route path="/profile/tickets/PopUp_Delete" element={<PopUp_DeletePage  />} />
        <Route path="/profile/tickets/CardPopUp_Page" element={<CardPopUp_Page  />} />
        <Route path="/profile/tickets/PasswordPopupsContainer" element={<PasswordPopupsContainer/>} />
        <Route path="/profile/tickets/AddressPage" element={<AddressPage/>} />
        <Route path="/profile/tickets/PaymentPage" element={<PaymentPage/>} />


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
