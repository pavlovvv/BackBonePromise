import style from "./D-Client-Dashboard-Yelp-overview.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Header from "../Header/Header.tsx";
import PerformanceSummary from "../PerformanceSummary/PerformanceSummary.tsx";
import LastInfo from "../LastInfo/LastInfo.tsx";
import Viewed from "../Viewed/Viewed.tsx";
import Trending from "../Trending/Trending.tsx";
import HeatMaps from "../HeatMaps/HeatMaps.tsx";
import StackedBarChart from "../StackedBarChart/StackedBarChart.tsx";
// import LinkedAccount from "../LinkedAccount/LinkedAccount.tsx";
// import TimeZone from "../TimeZone/TimeZone.tsx"
// import Adress from "../Adress/Adress.tsx"
// import Payments from "../Payments/Payments.tsx"
function D_Client_Dashboard_Yelp_overview() {
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
							<div className="section_CurrentRevenueCard">
								<PerformanceSummary />
							</div>
							<div>
								<LastInfo />
							</div>
							{/* <div className="section_BalanceOverviewChart"><LinkedAccount/></div> */}
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
              <p style={{font:'400 24px Open Sans'}}>Insights</p>

							<div style={{display:"flex",gap:"16px"}}>
								<Viewed />
								<HeatMaps />
							</div>
							<div style={{display:"flex" , gap:"16px"}}>
								<Trending />
								<StackedBarChart />
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Dashboard_Yelp_overview;
