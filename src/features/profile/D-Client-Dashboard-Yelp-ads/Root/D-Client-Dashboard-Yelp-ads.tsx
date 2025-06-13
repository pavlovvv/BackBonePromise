import style from "./D-Client-Dashboard-Yelp-ads.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Header from "../Header/Header.tsx";
import LastInfo from "../LastInfo/LastInfo.tsx";
import Trending from "../Trending/Trending.tsx";
import HeatMaps from "../HeatMaps/HeatMaps.tsx";
import TabContribution from "../TabContribution/TabContribution.tsx";
import TabPerfomance from "../TabPerformance/TabPerformance.tsx";
import BillingPeriod from "../BillingPeriod/BillingPeriod.tsx";
import TabBreakdown from "../TabBreakdown/TabBreakdown.tsx";
// import LinkedAccount from "../LinkedAccount/LinkedAccount.tsx";
// import TimeZone from "../TimeZone/TimeZone.tsx"
// import Adress from "../Adress/Adress.tsx"
// import Payments from "../Payments/Payments.tsx"
function D_Client_Dashboard_Yelp_ads() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__block}>
				<div className={style.profileSettingContainer__wrapper}>
					<header className={style.header}>
						<ClientProfileTop>Dashboard - Yepl</ClientProfileTop>
						<Header />
					</header>
					<main
						style={{ display: "flex", gap: "16px", flexDirection: "column" }}
						className=""
					>
						<section
							style={{
								display: "flex",
								gap: "16px",
								flexDirection: "column",
								width: "100%",
							}}
							className="section_lineDiagram"
						>
							<LastInfo />
							<TabContribution />
							<TabPerfomance />
							<BillingPeriod />
							<TabBreakdown />
						</section>
						<section
							style={{
								display: "flex",
								gap: "16px",
								flexDirection: "column",
								flexGrow: "1",
							}}
							className="section_PopularProducts"
						>
							<div style={{ display: "flex", gap: "16px" }}>
								<HeatMaps />
								<Trending />
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Dashboard_Yelp_ads;
