import style from "./TabBreakdown.module.sass";
import "mapbox-gl/dist/mapbox-gl.css";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";

export default function HeatMaps() {
	// const data = [
	// 	{ month: "May", organic: 10, ads: 0, gg: 23, forecast: 0 },
	// 	{ month: "Jul", organic: 15, ads: 180, forecast: 0 },
	// 	{ month: "Sep", organic: 18, ads: 40, forecast: 0 },
	// 	{ month: "Oct", organic: 20, ads: 50, forecast: 0 },
	// 	{ month: "Nov", organic: 18, ads: 45, forecast: 0 },
	// 	{ month: "Jan", organic: 25, ads: 70, forecast: 0 },
	// 	{ month: "Feb", organic: 22, ads: 85, forecast: 0 },
	// 	{ month: "Mar", organic: 35, ads: 150, forecast: 15 },
	// ];
	const data = [
		{
			month: "May",
			Calls: 10,
			"Website visitis": 0,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Jul",
			Calls: 15,
			"Website visitis": 180,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Sep",
			Calls: 18,
			"Website visitis": 40,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Oct",
			Calls: 20,
			"Website visitis": 50,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Nov",
			Calls: 18,
			"Website visitis": 45,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Jan",
			Calls: 25,
			"Website visitis": 70,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Feb",
			Calls: 22,
			"Website visitis": 85,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Mar",
			Calls: 35,
			"Website visitis": 150,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 15,
		},
	];

	return (
		<div className={style.Trending}>
			<div className={style.statistics}>
				<div className={style.statistics__block}>
					<div className={style["statistics__title-block"]}>
						<p>
							Leads breakdown <span>(last 12 months)</span>
						</p>
						<p>1.2k</p>
					</div>
					<div className={style["statistics__main"]}>
						<div className={style["statistics__chart-block"]}>
							<ResponsiveContainer height={300}>
								<BarChart barSize={30} height={360} barCategoryGap={40} data={data}>
									<CartesianGrid strokeDasharray="10 10" vertical={false} />

									<XAxis
										axisLine={{ stroke: "#ccc" }}
										tickLine={false}
										dataKey="month"
									/>
									<YAxis
										domain={[100, 200]}
										ticks={[100, 200]}
										tickLine={false}
										axisLine={false}
										orientation="right"
									/>
									<Tooltip />
									{/* <Legend /> */}

									<Bar
										dataKey="Directions & Map views"
										stackId="a"
										fill="#EF4D56"
										name="Directions & Map views"
									/>
									<Bar
										dataKey="CTA clicks"
										stackId="a"
										fill="#BE8A6C"
										name="CTA clicks"
									/>
									<Bar dataKey="Messages" stackId="a" fill="#EDCE54" name="Messages" />
									<Bar
										dataKey="Website visitis"
										stackId="a"
										fill="#49AB3A"
										name="Website visitis"
									/>
									<Bar
										radius={[5, 5, 0, 0]}
										dataKey="Calls"
										stackId="a"
										fill="#ABD1DE"
										name="Calls"
									/>
									<Bar
										radius={[5, 5, 0, 0]}
										stroke="#92A1A8"
										strokeWidth={1}
										dataKey="forecast"
										stackId="a"
										fill="#fff"
										name="forecast"
									/>
								</BarChart>
							</ResponsiveContainer>
						</div>
						<div className={style["statistics__info-block"]}>
							<div
								style={{
									borderBottom: "1.5px solid transparent",
									borderImage:
										"repeating-linear-gradient(to right, #c1c1c1 0 10px, transparent 10px 18px)",
									borderImageSlice: "1",
									padding: "0 0 24px 24px",
									display: "flex",
									flexDirection: "column",
									gap: "10px",
								}}
							>
								<div
									style={{
										display: "flex",
										gap: "8px",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
										<div
											style={{
												width: "16px",
												height: "16px",
												borderRadius: "999px",
												background: "#ABD1DE",
											}}
										></div>
										<p style={{ font: "400 14px Open Sans" }}>Calls</p>
									</div>
									<div style={{ display: "flex" }}>
										<p style={{ width: "60px" }}>288</p>
										<p style={{ color: "grey" }}>73%</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										gap: "8px",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
										<div
											style={{
												width: "16px",
												height: "16px",
												borderRadius: "999px",
												background: "#49AB3A",
											}}
										></div>
										<p style={{ font: "400 14px Open Sans" }}>Website visitis</p>
									</div>
									<div style={{ display: "flex" }}>
										<p style={{ width: "60px" }}>501</p>
										<p style={{ color: "grey" }}>40%</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										gap: "8px",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
										<div
											style={{
												width: "16px",
												height: "16px",
												borderRadius: "999px",
												background: "#EDCE54",
											}}
										></div>
										<p style={{ font: "400 14px Open Sans" }}>Messages</p>
									</div>
									<div style={{ display: "flex" }}>
										<p style={{ width: "60px" }}>132</p>
										<p style={{ color: "grey" }}>11%</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										gap: "8px",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
										<div
											style={{
												width: "16px",
												height: "16px",
												borderRadius: "999px",
												background: "#BE8A6C",
											}}
										></div>
										<p style={{ font: "400 14px Open Sans" }}>CTA clicks</p>
									</div>
									<div style={{ display: "flex" }}>
										<p style={{ width: "60px" }}>10</p>
										<p style={{ color: "grey" }}>1%</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										gap: "8px",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
										<div
											style={{
												width: "16px",
												height: "16px",
												borderRadius: "999px",
												background: "#EF4D56",
											}}
										></div>
										<p style={{ font: "400 14px Open Sans" }}>Directions & Map views</p>
									</div>
									<div style={{ display: "flex" }}>
										<p style={{ width: "60px" }}>300</p>
										<p style={{ color: "grey" }}>25%</p>
									</div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									gap: "8px",
									alignItems: "center",
									borderBottom: "1.5px solid transparent",
									borderImage:
										"repeating-linear-gradient(to right, #c1c1c1 0 10px, transparent 10px 18px)",
									borderImageSlice: "1",
									padding: "24px 0 24px 24px",
									justifyContent: "space-between",
								}}
							>
								<div style={{ display: "flex", alignItems: "center" }}>
									<p style={{ font: "400 14px Open Sans" }}>Total</p>
								</div>

								<div style={{ display: "flex" }}>
									<p style={{ display: "flex", width: "60px" }}>1,241</p>
									<p style={{ color: "grey" }}>100%</p>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									gap: "8px",
									alignItems: "center",
									padding: "24px 0 24px 24px",
									justifyContent: "space-between",
								}}
							>
								<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
									<div
										style={{
											width: "16px",
											height: "16px",
											borderRadius: "999px",
											border: "1px solid grey",
										}}
									></div>
									<p style={{ font: "400 14px Open Sans" }}>Forecast</p>
								</div>

								<div style={{ display: "flex" }}>
									<p style={{ width: "60px" }}>906</p>
									<p style={{ color: "grey" }}>73%</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
