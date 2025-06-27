import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import style from "./TabPanel.module.sass";

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
				<div className={style["tabs-panel"]}>
					<Tabs
						className={style["tabs-panel__block"]}
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							className={style["tabs-panel__title"]}
							label="Information"
							{...a11yProps(0)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Review (10)"
							{...a11yProps(1)}
						/>
					</Tabs>
				</div>
				<CustomTabPanel value={value} index={0}>
					<div className={style.information}>
						<div className={style.information__container}>
							<div className={style.information__block}>
								<div>Bust</div>
								<div>97cm</div>
							</div>
							<div className={style.information__block}>
								<div>Shoulder</div>
								<div>47cm</div>
							</div>
							<div className={style.information__block}>
								<div>Length</div>
								<div>65cm</div>
							</div>
							<div className={style.information__block}>
								<div>Sleeve Length</div>
								<div>51cm</div>
							</div>
							<div className={style.information__block}>
								<div>Compound</div>
								<div>100% Polyester</div>
							</div>
							<div className={style.information__block}>
								<div>Collection</div>
								<div>FW-24</div>
							</div>
						</div>
					</div>
				</CustomTabPanel>
				<div className={style["tabs-content"]}>
					<CustomTabPanel value={value} index={1}>
						<div className={style.information}>
							<div className={style.information__container}>
								<div className={style.information__block}>
									<div>Bust</div>
									<div>97cm</div>
								</div>
								<div className={style.information__block}>
									<div>Shoulder</div>
									<div>47cm</div>
								</div>
								<div className={style.information__block}>
									<div>Length</div>
									<div>65cm</div>
								</div>
								<div className={style.information__block}>
									<div>Sleeve Length</div>
									<div>51cm</div>
								</div>
								<div className={style.information__block}>
									<div>Compound</div>
									<div>100% Polyester</div>
								</div>
								<div className={style.information__block}>
									<div>Collection</div>
									<div>FW-24</div>
								</div>
							</div>
						</div>
					</CustomTabPanel>
				</div>
			</div>
		</div>
	);
}
