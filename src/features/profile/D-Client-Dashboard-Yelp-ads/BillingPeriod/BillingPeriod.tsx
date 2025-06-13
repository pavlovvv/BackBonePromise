import style from "./BillingPeriod.module.sass";

export default function BillingPeriod() {
	return (
		<div className={style.LastInfo}>
			<div className={style.LastInfo__container}>
				<p className={style.LastInfo__title}>Ad spending this billing period</p>
				<div className={style.statistics}>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<p>Impressions</p>
						</div>
						<div className={style["statistics__main-block"]}>
							<div className={style["statistics__text"]}>
								<p>$0</p>
								<p>Mar 1 - Mar 30, 2025</p>
							</div>
						</div>
					</div>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<p>Page visits</p>
						</div>
						<div className={style["statistics__main-block"]}>
							<div className={style["statistics__text"]}>
								<p>--</p>
								<p></p>
							</div>
						</div>
					</div>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<p>Leads</p>
						</div>
						<div className={style["statistics__main-block"]}>
							<div className={style["statistics__text"]}>
								<p>--</p>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
