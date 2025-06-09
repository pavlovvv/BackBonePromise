import style from "./Trending.module.sass";
import Vector1 from "./assets/Vector1.svg";
import Vector2 from "./assets/Vector2.svg";

export default function Trending() {
	return (
		<div className={style.Trending}>
			<div className={style.Trending__container}>
				<div className={style.statistics}>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<p>Last 30 days</p>
							<p>Trending search terms in your area</p>
						</div>
						<div className={style["statistics__main-block"]}>
							<div className={style.statistics__rate}>
								<div style={{ width: "100%" }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<p style={{ font: "400 14px Open Sans" }}>Custom flags</p>
										<div style={{display:"flex" , gap:"20px"}}>
											<img src={Vector1} alt="" />
											<p style={{ font: "700 14px Open Sans", color: "#49AB3A" }}>+46%</p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.statistics__rate}>
								<div style={{ width: "100%" }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<p style={{ font: "400 14px Open Sans" }}>Custom flags</p>
										<div style={{display:"flex" , gap:"20px"}}>
											<img src={Vector2} alt="" />
											<p style={{ font: "700 14px Open Sans", color: "#49AB3A" }}>+136%</p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.statistics__rate}>
								<div style={{ width: "100%" }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<p style={{ font: "400 14px Open Sans" }}> T-Shirt</p>
										<div style={{display:"flex" , gap:"20px"}}>
											<img src={Vector1} alt="" />
											<p style={{ font: "700 14px Open Sans", color: "#49AB3A" }}>+136%</p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.statistics__rate}>
								<div style={{ width: "100%" }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<p style={{ font: "400 14px Open Sans" }}> T-Shirt</p>
										<div style={{display:"flex" , gap:"20px"}}>
											<img src={Vector2} alt="" />
											<p style={{ font: "700 14px Open Sans", color: "#49AB3A" }}>+36%</p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.statistics__rate}>
								<div style={{ width: "100%" }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<p style={{ font: "400 14px Open Sans" }}>Custom flags long title example</p>
										<div style={{display:"flex" , gap:"20px"}}>
											<img src={Vector1} alt="" />
											<p style={{ font: "700 14px Open Sans", color: "#49AB3A" }}>+13%</p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.statistics__rate}>
								<div style={{ width: "100%" }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<p style={{ font: "400 14px Open Sans" }}>Custom flags</p>
										<div style={{display:"flex" , gap:"20px"}}>
											<img src={Vector2} alt="" />
											<p style={{ font: "700 14px Open Sans", color: "#49AB3A" }}>+19%</p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.statistics__rate}>
								<div style={{ width: "100%" }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<p style={{ font: "400 14px Open Sans" }}>Custom flags</p>
										<div style={{display:"flex" , gap:"20px"}}>
											<img src={Vector1} alt="" />
											<p style={{ font: "700 14px Open Sans", color: "#49AB3A" }}>+55%</p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.statistics__rate}>
								<div style={{ width: "100%" }}>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<p style={{ font: "400 14px Open Sans" }}>Custom flags</p>
										<div style={{display:"flex" , gap:"20px"}}>
											<img src={Vector2} alt="" />
											<p style={{ font: "700 14px Open Sans", color: "#49AB3A" }}>+136%</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
