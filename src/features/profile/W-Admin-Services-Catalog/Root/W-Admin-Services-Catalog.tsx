import style from "./W-Admin-Services-Catalog.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Search from "../Search/Search.tsx";
import Filters from "../Filters/Filters.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx";
function W_Admin_Services_Catalog() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__block}>
				<div className={style.profileSettingContainer__wrapper}>
					<header className={style.header}>
						<ClientProfileTop>Services - Catalog</ClientProfileTop>
					</header>
					<main style={{ display: "flex", gap: "16px" }} className="">
						<section
							style={{
								display: "flex",
								gap: "16px",
								flexDirection: "column",
								maxWidth: "370px",
							}}
						>
							<div>
								<Search />
							</div>
							<div style={{ flexGrow: "1" }}>
								<Filters />
							</div>
						</section>
						<section
							style={{
								display: "flex",
								gap: "16px",
								flexDirection: "column",
								width: "100%",
							}}
						>
							<TabPanel />
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default W_Admin_Services_Catalog;
