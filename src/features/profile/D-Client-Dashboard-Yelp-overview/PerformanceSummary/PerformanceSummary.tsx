
import style from "./PerformanceSummary.module.sass";
import arrow_up_simple from './assets/arrow_up_simple.svg'




export default function PerformanceSummary() {

    return (
        <div className={style.performanceSummary}>
            <div className={style.performanceSummary__container} >
                <p className={style.performanceSummary__title}>Performance summary</p>
                <div className={style.performanceSummary__block}>
                    <div className={style.rate}>
                        <div className={style.rate__numbers}>
                            <div className={style['rate__img-block']}>
                                <div>
                                    <img src={arrow_up_simple} alt="" />
                                </div>
                            </div>
                            <p>320%</p>
                        </div>
                        <div className={style['rate__text-block']}>
                            <p>Yelp Ads have increased your total leads by 320% in the last 30 days.</p>
                            <p>Check the insights below to see how you can get even more leads.</p>
                        </div>
                    </div>
                </div>
            </div>
        

        </div>
    );
}
