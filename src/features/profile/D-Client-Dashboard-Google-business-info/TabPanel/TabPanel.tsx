import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import style from "./TabPanel.module.sass";
import Calendar from "../calendar/Calendar";
import linkLogo from "../assets/linkLogo.svg";
import markerMaps from "../assets/markerMaps.svg";
import Map from "../map/map.tsx";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			className={style["tabs-content__body"]}
		>
			{value === index && (
				<div className={style["tabs-content__block"]}>{children}</div>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = useState(0);

	const [name, setName] = useState("Sandra");
	const [brandName, setBrandName] = useState("Clothes shop");
	const [number1, setNumber1] = useState("(213) 952 4384");
	const [number2, setNumber2] = useState("(213) 952 4384");
	const [servise, setService] = useState("Downey, CA, USA");
	const [servise2, setService2] = useState("Malibu, CA, USA");
	const [chat, setChat] = useState("");
	const [webSite, setWebSite] = useState("http:/www.shopname.com/");
	const [social, setSocial] = useState("http:/www.instagram.com/the.shop");
	const [shortName, setShortName] = useState("the-shop-name");
	const [maps, setMaps] = useState(
		"111 Name Blvd, Suite 222, Los Angeles, CA 90015"
	);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={style.container}>
			<div className={style.container__block}>
				<div className={style["tabs-panel"]}>
					<Tabs
						className={style["tabs-panel__block"]}
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							className={style["tabs-panel__title"]}
							label="About"
							{...a11yProps(0)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Contact"
							{...a11yProps(1)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Location"
							{...a11yProps(2)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Hours"
							{...a11yProps(3)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="More"
							{...a11yProps(4)}
						/>
					</Tabs>
				</div>

				<div className={style["tabs-content"]}>
					{/* Вкладка All */}
					<CustomTabPanel value={value} index={0}>
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>Business name</p>
							<div className={style["tabs-content__info-text"]}>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
						</div>
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>Business category</p>
							<div className={style["tabs-content__info-text"]}>
								<input
									type="text"
									value={brandName}
									onChange={(e) => setBrandName(e.target.value)}
								/>
							</div>
						</div>
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>E-mail</p>
							<div
								className={`${style["tabs-content__info-text"]} ${style["tabs-content__info-text--spaced"]}`}
							>
								<p>
									Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam eaque ipsa. Sed ut
									perspiciatis, unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam eaque ipsa.Sed ut
									perspiciatis, unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam eaque ipsa. Sed ut
									perspiciatis, unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam eaque ipsa.
								</p>
							</div>
						</div>
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>Opening date</p>
							<div className={style["tabs-content__info-text"]}>
								<Calendar />
							</div>
						</div>
					</CustomTabPanel>

					{/* Вкладка Replied */}
					<CustomTabPanel value={value} index={1}>
						<div className={style["tabs-content__wrapper"]}>
							<div className={style["tabs-content__info-block"]}>
								<p className={style["tabs-content__info-title"]}>Phone number</p>
								<div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
									<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
										<div className={`${style["tabs-content__info-text"]} `}>
											<input
												type={"text"}
												placeholder="New password"
												value={number1}
												onChange={(e) => setNumber1(e.target.value)}
											/>
										</div>
										<div
											style={{
												height: "min-content",
												width: "min-content",
												padding: "10px 24px",
												border: "1px solid  #6CAFC6",
												borderRadius: "30px",
											}}
										>
											<p style={{ font: "400 18px Open Sans", color: "#6CAFC6" }}>
												Primary
											</p>
										</div>
									</div>

									<div className={`${style["tabs-content__info-text"]} `}>
										<input
											type={"text"}
											placeholder="New password"
											value={number2}
											onChange={(e) => setNumber2(e.target.value)}
										/>
									</div>
								</div>
							</div>
							<div className={style["tabs-content__info-block"]}>
								<p className={style["tabs-content__info-title"]}>Chat</p>
								<div className={`${style["tabs-content__info-text"]} `}>
									<input
										type={"text"}
										placeholder="No chat"
										value={chat}
										onChange={(e) => setChat(e.target.value)}
									/>
								</div>
							</div>
							<div className={style["tabs-content__info-block"]}>
								<p className={style["tabs-content__info-title"]}>Website</p>
								<div className={`${style["tabs-content__info-text"]}`}>
									<input
										type="text"
										placeholder="Confirm password"
										value={webSite}
										onChange={(e) => setWebSite(e.target.value)}
									/>
									<img src={linkLogo} alt="" />
								</div>
							</div>
							<div className={style["tabs-content__info-block"]}>
								<p className={style["tabs-content__info-title"]}>Social profiles</p>
								<div className={`${style["tabs-content__info-text"]}`}>
									<input
										type="text"
										placeholder="Confirm password"
										value={social}
										onChange={(e) => setSocial(e.target.value)}
									/>
									<img src={linkLogo} alt="" />
								</div>
							</div>
							<div className={style["tabs-content__info-block"]}>
								<p className={style["tabs-content__info-title"]}>Short name</p>
								<div className={`${style["tabs-content__info-text"]}`}>
									<input
										type="text"
										placeholder="Confirm password"
										value={shortName}
										onChange={(e) => setShortName(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</CustomTabPanel>

					{/* Вкладка Unreplied */}
					<CustomTabPanel value={value} index={2}>
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>Business location</p>
							<div className={`${style["tabs-content__info-text"]} `}>
								<img style={{ marginRight: "15px" }} src={markerMaps} alt="" />
								<input
									type={"text"}
									value={maps}
									onChange={(e) => setMaps(e.target.value)}
								/>
							</div>
						</div>
						<Map mapValue={maps} />
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>Service area</p>
							<div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
								<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
									<div className={`${style["tabs-content__info-text"]} `}>
										<input
											type={"text"}
											placeholder="New password"
											value={servise}
											onChange={(e) => setService(e.target.value)}
										/>
									</div>
								</div>

								<div className={`${style["tabs-content__info-text"]} `}>
									<input
										type={"text"}
										placeholder="New password"
										value={servise2}
										onChange={(e) => setService2(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={3}>
						<div className={style["hours"]}>
							<div className={style["hours__title-block"]}>
								<p>Open with main hours</p>
							</div>
							<div className={style["hours__info-block"]}>
								<div className={style["hours__days"]}>
									<p>Monday</p>
									<p>Tuesday</p>
									<p>Wednesday</p>
									<p>Thursday</p>
									<p>Friday</p>
									<p>Saturday</p>
									<p>Sunday</p>
								</div>
								<div className={style["hours__time"]}>
									<p>09:00 - 19:00</p>
									<p>09:00 - 19:00</p>
									<p>09:00 - 19:00</p>
									<p>09:00 - 19:00</p>
									<p>09:00 - 19:00</p>
									<p>Closed</p>
									<p>Closed</p>
								</div>
							</div>
						</div>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={4}>
						<div className={style["list"]}>
							<div className={style["list__block"]}>
								<p>From the business</p>
								<ul>
									<li>Identifies as women-owned</li>
									<li>Small Business</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Accessibility</p>
								<ul>
									<li>Has wheelchair-accessible toilet</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Amenities</p>
								<ul>
									<li>Free Wi-Fi</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Children</p>
								<ul>
									<li className={style["list__text--disabled"]} >No items</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Crowd</p>
								<ul>
									<li>LGBTQ+ friendly</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Parking</p>
								<ul>
									<li>Free of charge street parking</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Payments</p>
								<ul>
									<li>Accepts credit cards</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Planing</p>
								<ul>
									<li>Appointment required</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Recycling</p>
								<ul>
									<li>No electronics recycling</li>
								</ul>
							</div>
							<div className={style["list__block"]}>
								<p>Service options</p>
								<ul>
									<li>Offers delivery</li>
								</ul>
							</div>
						</div>
					</CustomTabPanel>
				</div>
			</div>
		</div>
	);
}
