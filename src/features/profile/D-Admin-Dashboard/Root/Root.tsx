import './Root.css';
import userLogo from "../assets/userLogo.svg"
import addFriens from "../assets/user-add.svg"
import dollar from "../assets/dollar-1.svg"
import close from "../assets/close.svg"
import BalanceOverviewChart from '../components/LineDiagram.tsx'
import PopularProductsTable from '../components/PopularProductsTable.tsx';
// import CurrentRevenueCard from '../components/CurrentRevenueCard.tsx';
import DonutChart from '../components/DonutChart.tsx';
import DonutChartOrder from "../components/DonutChartOrder.tsx"
// import ReferralsBarChart from "../components/ReferralsBarChart.tsx"

function Root() {

  return (
    <div className="body-container">
      <section className='section_statistics'>
      <div className='statistics_block'>
        <div className='statistics_percentageText-block'>
          <p>+17%</p>
        </div>
        <div className='statistics_countPeople-block'>
          <div className='statistics_wrapperCount'>
          <div className="statistics_block-img">
            <img src={userLogo} alt="" />
          </div>
            <p className='statistics_countPeople'>2717</p>
          </div>
          <div className='statistics_bottomText-block'>
            <p>All customers</p>
          </div> 
        </div>
      </div>
      <div className='statistics_block'>
        <div className='statistics_percentageText-block'>
          <p>+8%</p>
        </div>
        <div className='statistics_countPeople-block'>
          <div className='statistics_wrapperCount'>
          <div className="statistics_block-img">
            <img src={addFriens} alt="" />
          </div>
            <p className='statistics_countPeople'>512</p>
          </div>
          <div className='statistics_bottomText-block'>
            <p>Conversion rate</p>
          </div> 
        </div>
      </div>
      <div className='statistics_block'>
        <div className='statistics_percentageText-block'>
          <p>+2%</p>
        </div>
        <div className='statistics_countPeople-block'>
          <div className='statistics_wrapperCount'>
            <div className="statistics_block-img">
              <img src={dollar} alt=""/>
            </div>
            <p className='statistics_countPeople'>85</p>
          </div>
          <div className='statistics_bottomText-block'>
            <p>Average client check</p>
          </div> 
        </div>
      </div>
      <div className='statistics_block'>
        <div className='statistics_percentageText-block'>
          <p>-3%</p>
        </div>
        <div className='statistics_countPeople-block'>
          <div className='statistics_wrapperCount'>
          <div className="statistics_block-img">
            <img src={close} alt="" />
          </div>
            <p className='statistics_countPeople'>2k</p>
          </div>
          <div className='statistics_bottomText-block'>
            <p>Canceled subscriptions</p>
          </div> 
        </div>
      </div>
      </section>
      <section className='section_lineDiagram'>
        <div className="section_CurrentRevenueCard">
          {/* <ReferralsBarChart/> */}
          <DonutChart/>
        </div>
        <div className="section_BalanceOverviewChart">
        <BalanceOverviewChart/>
        </div>
      </section>
      <section className='section_PopularProducts'>
        <div className="section_PopularProductsTable">
          <PopularProductsTable/>
        </div>
        <div className="section_DonutChart">
          <DonutChartOrder/>
        </div>
      </section>
    </div>
  );
}

export default Root;
