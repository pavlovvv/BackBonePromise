import style from "./Pop-up-Preview-info-admin.module.sass";
// import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
// import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Catalog from "../Catalog/Catalog.tsx";
import FullDescription from "../FullDescription/FullDescription.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx";

function Pop_up_Preview_info_admin() {
	return (
		<div className={style.profileSettingContainer}>
			{/* <Sidebar /> */}
			<div className={style.profileSettingContainer__block}>
				<div className={style.profileSettingContainer__wrapper}>
					{/* <header className={style.header}>
						<ClientProfileTop>Services - Catalog</ClientProfileTop>
					</header> */}
					<main
						style={{
							display: "flex",
							gap: "16px",
							background: "#fff",
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
							<div>
								<Catalog />
								<FullDescription />
								<TabPanel />
							</div>
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

export default Pop_up_Preview_info_admin;
