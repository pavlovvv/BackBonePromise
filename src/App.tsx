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
import D_Client_Profile_settings from "./features/profile/D-Client-Profile-settings/Root/D-Client-Profile-settings.tsx";
import D_Client_Dashboard_Google_reviews from "../src/features/profile/D-Client-Dashboard-Google-reviews/Root/D-Client-Dashboard-Google-reviews.tsx";
import D_Client_Dashboard_Google_business_info from "../src/features/profile/D-Client-Dashboard-Google-business-info/Root/D-Client-Dashboard-Google-business-info.tsx";
import D_Client_Dashboard_Google_performance from "./features/profile/D-Client-Dashboard-Google-performance/Root/D-Client-Dashboard-Google-performance.tsx";
import D_Client_Dashboard_Yelp_overview from "./features/profile/D-Client-Dashboard-Yelp-overview/Root/D-Client-Dashboard-Yelp-overview.tsx";
import D_Client_Dashboard_Yelp_ads from "./features/profile/D-Client-Dashboard-Yelp-ads/Root/D-Client-Dashboard-Yelp-ads.tsx";
import D_Client_Support_Onboarding from "./features/profile/D-Client-Support-Onboarding/Root/D-Client-Support-Onboarding.tsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<D_Sale_manager_Dashboard />} />

				<Route path="/profile/tickets" element={<Tickets />} />
				<Route path="/profile/Agent-Dashboard" element={<D_Agent_dashboard />} />
				<Route path="/profile/Admin_Dashboard" element={<D_Admin_Dashboard />} />

				<Route path="/profile/tickets/chat" element={<SupportTicketsChat />} />
				<Route
					path="/profile/tickets/Profile_settings"
					element={<D_Client_Profile_settings />}
				/>

				<Route
					path="/profile/tickets/PopUp_Delete"
					element={<PopUp_DeletePage />}
				/>
				<Route
					path="/profile/tickets/CardPopUp_Page"
					element={<CardPopUp_Page />}
				/>
				<Route
					path="/profile/tickets/PasswordPopupsContainer"
					element={<PasswordPopupsContainer />}
				/>
				<Route path="/profile/tickets/AddressPage" element={<AddressPage />} />
				<Route path="/profile/tickets/PaymentPage" element={<PaymentPage />} />
				<Route
					path="/profile/tickets/D_Client_Dashboard_Google_reviews"
					element={<D_Client_Dashboard_Google_reviews />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Google_business_info"
					element={<D_Client_Dashboard_Google_business_info />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Google_performance"
					element={<D_Client_Dashboard_Google_performance />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Yelp_overview"
					element={<D_Client_Dashboard_Yelp_overview />}
				/>
				<Route
					path="/profile/tickets/D_Client_Dashboard_Yelp_ads"
					element={<D_Client_Dashboard_Yelp_ads />}
				/>
				<Route
					path="/profile/tickets/D_Client_Support_Onboarding"
					element={<D_Client_Support_Onboarding />}
				/>

				<Route path="/profile/tickets/create" element={<SupportCreateTicket />} />
			</Routes>
			/
		</Router>
	);
}

export default App;
