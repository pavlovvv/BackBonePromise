import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import style from "./TabPanel.module.sass";
import UploadAvatars from "./UploadAvatars/UploadAvatars";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import PopUp_Delete from "@/components/common/popUp/popUp_Delete/popUp_Delete";

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
	const [value, setValue] = React.useState(0);
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [show, setShow] = useState(false);
	const [oldPasswordShow, setOldPasswordShow] = useState(false);

	const [name, setName] = useState("Sandra");
	const [brandName, setBrandName] = useState("Anna Adame");
	const [email, setEmail] = useState("anna.adame@gmail.com");
	const [phone, setPhone] = useState("(213) 952 4384");

	const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
	const handleDelete = () => {
		console.log("Delete confirmed");
		setDeletePopupOpen(false);
	};
	const closeDeletePopup = () => setDeletePopupOpen(false);
	const isLengthValid = password.length >= 8 && password.length <= 20;
	const hasLower = /[a-z]/.test(password);
	const hasUpper = /[A-Z]/.test(password);
	const hasDigit = /\d/.test(password);

	const isValid =
		isLengthValid && hasLower && hasUpper && hasDigit && password === confirm;

	const handleSubmit = () => {
		if (isValid) {
			console.log("New password:", password);
		}
	};

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
							label="Personal info"
							{...a11yProps(0)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Change password"
							{...a11yProps(1)}
						/>
					</Tabs>
				</div>
				<div className={style["tabs-content"]}>
					<CustomTabPanel value={value} index={0}>
						<div className={style["tabs-content__photo-block"]}>
							<UploadAvatars />
						</div>
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>
								Brand name <span>(optional)</span>
							</p>
							<div className={style["tabs-content__info-text"]}>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
						</div>
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>Name</p>
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
								<input
									type="text"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className={style["tabs-content__checkbox-block"]}>
								<input id="qwe" type="checkbox" />
								<label htmlFor="qwe">E-mail notification text</label>
							</div>
						</div>
						<div className={style["tabs-content__info-block"]}>
							<p className={style["tabs-content__info-title"]}>Phone number</p>
							<div className={style["tabs-content__info-text"]}>
								<input
									type="text"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						<div className={style["tabs-content__wrapper"]}>
							<div className={style["tabs-content__info-block"]}>
								<p className={style["tabs-content__info-title"]}>Old password</p>
								<div className={`${style["tabs-content__info-text"]} `}>
									<input
										disabled
										type={oldPasswordShow ? "text" : "password"}
										placeholder="New password"
										value={12323}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<span onClick={() => setOldPasswordShow(!oldPasswordShow)}>
										{oldPasswordShow ? (
											<VisibilityOff fontSize="small" />
										) : (
											<Visibility fontSize="small" />
										)}
									</span>
								</div>
							</div>
							<div className={style["tabs-content__info-block"]}>
								<p className={style["tabs-content__info-title"]}>New password</p>
								<div
									className={`${style["tabs-content__info-text"]} ${style["tabs-content__info-text--spaced"]}`}
								>
									<input
										type={show ? "text" : "password"}
										placeholder="New password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<span onClick={() => setShow(!show)}>
										{show ? (
											<VisibilityOff fontSize="small" />
										) : (
											<Visibility fontSize="small" />
										)}
									</span>
								</div>
								<p className={style["tabs-content__hint"]}>
									<span
										style={{ font: "400 14px Open Sans" }}
										className={isLengthValid ? style["green"] : ""}
									>
										Between 8 and 20 characters
									</span>
									<br />
									<span
										style={{ font: "400 14px Open Sans" }}
										className={hasLower ? style["green"] : ""}
									>
										1 lowercase letter
									</span>
									,{" "}
									<span
										style={{ font: "400 14px Open Sans" }}
										className={hasUpper ? style["green"] : ""}
									>
										1 uppercase letter
									</span>
									,{" "}
									<span
										style={{ font: "400 14px Open Sans" }}
										className={hasDigit ? style["green"] : ""}
									>
										1 digit
									</span>
								</p>
							</div>
							<div className={style["tabs-content__info-block"]}>
								<p className={style["tabs-content__info-title"]}>
									Confirm new password
								</p>
								<div className={`${style["tabs-content__info-text"]}`}>
									<input
										type="password"
										placeholder="Confirm password"
										value={confirm}
										onChange={(e) => setConfirm(e.target.value)}
									/>
									<Visibility fontSize="small" className="tabs-content__icon" />
								</div>
							</div>
						</div>
						<div className={style["tabs-content__info-block"]}>
							<div
								className={style["tabs-content__button-block"]}
								style={{ display: "flex", justifyContent: "end" }}
							>
								{isDeletePopupOpen && (
									<PopUp_Delete
										title="Delete"
										message="Are you sure?"
										confirmText="No"
										cancelText="Delete"
										showCancel
										onConfirm={handleDelete}
										onCancel={closeDeletePopup}
									/>
								)}
								<button
									onClick={() => setDeletePopupOpen(true)}
									style={{ flexBasis: "50%", font: "400 18px Open Sans" }}
									className="tabs-content__submit"
									// onClick={handleSubmit}
								>
									Change password
								</button>
							</div>
						</div>
					</CustomTabPanel>
				</div>
			</div>
		</div>
	);
}
