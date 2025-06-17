import style from "./D-Client-Support-FAQ.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";

import Adress from "../Adress/Adress.tsx";

function D_Client_Support_FAQ() {
	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__block}>
				<div className={style.profileSettingContainer__wrapper}>
					<header className={style.header}>
						<ClientProfileTop>Support - FAQ</ClientProfileTop>
					</header>
					<main style={{ display: "flex", gap: "16px" }} className="">
						<section
							style={{
								display: "flex",
								gap: "16px",
								flexDirection: "column",
								flexGrow: "1",
							}}
							className="section_PopularProducts"
						>
							<div className="section_DonutChart">
								<Adress />
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default D_Client_Support_FAQ;
