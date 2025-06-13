import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import style from "./TabContribution.module.sass";
import StackedBarChart from "../StackedBarChart/StackedBarChart";
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

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={style.container}>
			<div className={style.container__block}>
				<div className={style["container__title-block"]}>
					<p>Ad contribution</p>
					<p>(last 12 months)</p>
				</div>
				<div className={style["tabs-panel"]}>
					<Tabs
						className={style["tabs-panel__block"]}
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							className={style["tabs-panel__title"]}
							label={
								<div style={{ textAlign: "start" }}>
									Page visits: ad vs organic
									<br />
									2.8k
								</div>
							}
							{...a11yProps(0)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label={
								<div style={{ textAlign: "start" }}>
									Leads: ad vs organic
									<br />
									1.2k
								</div>
							}
							{...a11yProps(1)}
						/>
					</Tabs>
				</div>
				<CustomTabPanel value={value} index={0}>
					<StackedBarChart />
				</CustomTabPanel>
				<div className={style["tabs-content"]}>
					<CustomTabPanel value={value} index={1}>
						<StackedBarChart />
					</CustomTabPanel>
				</div>
			</div>
		</div>
	);
}
