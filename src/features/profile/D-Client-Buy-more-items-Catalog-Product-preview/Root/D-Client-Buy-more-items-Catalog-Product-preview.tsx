import style from "./D-Client-Buy-more-items-Catalog-Product-preview.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Catalog from "../Catalog/Catalog.tsx";
import FullDescription from "../FullDescription/FullDescription.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx";

function D_Client_Buy_more_items_Catalog_Product_preview() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__block}>
				<div className={style.profileSettingContainer__wrapper}>
					<header className={style.header}>
						<ClientProfileTop>Buy more items - Catalog - Preview </ClientProfileTop>
					</header>
					<main
						style={{
							display: "flex",
							gap: "16px",
							borderRadius: "8px",
						}}
						className=""
					>
						<section
							style={{
								display: "flex",
								gap: "16px",
								flexDirection: "column",
								width: "100%",
							}}
						>
							<Catalog />
							<FullDescription />
							<TabPanel />
							<div style={{ flexGrow: "1" }}></div>
						</section>
						{/* <section
							style={{
								display: "flex",
								gap: "16px",
								flexDirection: "column",
								width: "100%",
							}}
						></section> */}
					</main>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Buy_more_items_Catalog_Product_preview;
