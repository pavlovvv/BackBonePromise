import style from "./D-Admin-Services-Order-for-items.module.sass";
import PopularProductsTable from "../PopularProductsTable/PopularProductsTable.tsx";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
function D_Admin_Services_Order_for_items() {
	return (
		<div className={style["body"]}>
			<Sidebar />
			<div className={style["body__container"]}>
				<div className={style["body__block"]}>
					<ClientProfileTop>Services - Order for items</ClientProfileTop>
					<section className={style["body__group-one"]}>
						<div className={style["body__popular"]}>
							<PopularProductsTable />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default D_Admin_Services_Order_for_items;
