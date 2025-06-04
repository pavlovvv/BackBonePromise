import style from "./D-Client-Dashboard-Google-performance.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx"
import Header from "../Header/Header.tsx";
// import LinkedAccount from "../LinkedAccount/LinkedAccount.tsx";
// import TimeZone from "../TimeZone/TimeZone.tsx"
// import Adress from "../Adress/Adress.tsx"
// import Payments from "../Payments/Payments.tsx"
function D_Client_Dashboard_Google_performance() {
  return (
    <div className={style.profileSettingContainer}>
      <Sidebar />
      <div className={style.profileSettingContainer__block}>
        <div className={style.profileSettingContainer__wrapper}>
          <header className={style.header}>
            <ClientProfileTop>Dashboard - Google business</ClientProfileTop>
            <Header/>
          </header>
          <main style={{display:"flex" , gap:"16px" }} className="">
            <section style={{display:"flex" , gap:"16px" , flexDirection:"column",width:"100%"}} className="section_lineDiagram">
              <div  className="section_CurrentRevenueCard"><TabPanel/></div>
              {/* <div className="section_BalanceOverviewChart"><LinkedAccount/></div> */}
            </section>
            {/* <section style={{display:"flex" , gap:"16px" , flexDirection:"column",flexGrow:"1"}} className="section_PopularProducts">
              <div className="section_PopularProductsTable"><TimeZone/></div>
              <div className="section_DonutChart"><Adress/></div>
              <div><Payments/></div>
            </section> */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default D_Client_Dashboard_Google_performance;
