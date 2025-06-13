import style from "./LastInfo.module.sass";
import people from "./assets/people.svg";
import eyes from "./assets/eyes.svg";
import addPeople from "./assets/addPeople.svg";


export default function LastInfo() {
	return (
		<div className={style.LastInfo}>
			<div className={style.LastInfo__container}>
				<p className={style.LastInfo__title}>Last 30 days</p>
				<div className={style.statistics}>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<img src={eyes} alt="" />
							<p>Impressions</p>
						</div>
						<div className={style["statistics__main-block"]}>
							<div className={style["statistics__text"]}>
								<p>17.4k</p>
								<p>from Ads</p>
							</div>							
							<p className={style["statistics__sub-text"]}>
								16.1k of total <span>(92%)</span>
							</p>
						</div>
					</div>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<img src={people} alt="" />
							<p>Page visits</p>
						</div>
						<div className={style["statistics__main-block"]}>
							<div className={style["statistics__text"]}>
								<p>434</p>
								<p>from Ads</p>
							</div>							
							<p className={style["statistics__sub-text"]}>
								16.1k of total <span>(92%)</span>
							</p>
						</div>
					</div>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<img src={addPeople} alt="" />
							<p>Leads</p>
						</div>
						<div className={style["statistics__main-block"]}>
							<div className={style["statistics__text"]}>
								<p>160</p>
								<p>from Ads</p>
							</div>							
							<p className={style["statistics__sub-text"]}>
								16.1k of total <span>(92%)</span>
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
}
