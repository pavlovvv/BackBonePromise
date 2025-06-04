import {
	MenuItem,
	Select,
	SelectChangeEvent,
	SelectProps,
} from "@mui/material";
import { useState } from "react";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
import style from "./Header.module.sass";


// Тип часової зони
type TimeZoneOption = "Reviews" | "Reviews" | "Reviews";
type TimeZoneOption2 = "Oct 2024 - Mar 2024" | "Oct 2021 - Mar 2025" | "Oct 2022 - Mar 2029";


// Варіанти часових зон
const TIME_ZONES: Array<{ value: TimeZoneOption }> = [
	{
		value: "Reviews",
	},
	{ value: "Reviews" },
	{ value: "Reviews" },
];
const TIME_ZONES2: Array<{ value: TimeZoneOption2 }> = [
	{
		value: "Oct 2024 - Mar 2024",
	},
	{ value: "Oct 2021 - Mar 2025" },
	{ value: "Oct 2022 - Mar 2029" },
];


// Іконка стрілки
const DropdownIcon = (props: { className?: string }) => (
	<img
		{...props}
		src={ArrowIconSrc}
		alt="arrow"
		style={{ width: 24, height: 24, display: "block", pointerEvents: "none" }}
	/>
);

export default function Header() {
	const [timeZone, setTimeZone] = useState<TimeZoneOption>("Reviews");
	const [timeZone2, setTimeZone2] = useState<TimeZoneOption2>("Oct 2024 - Mar 2024");

	const handleTimeZoneChange: SelectProps["onChange"] = (
		event: SelectChangeEvent<unknown>
	) => {
		setTimeZone(event.target.value as TimeZoneOption);
	};

	const handleTimeZoneChange2: SelectProps["onChange"] = (
		event: SelectChangeEvent<unknown>
	) => {
		setTimeZone2(event.target.value as TimeZoneOption2);
	};

	return (
		<div className={style.timezone}>
			<div className={style.timezone__wrapper}>
				<div className={style.timezone__block}>
					<div className={style.timezone__title}>
						<p>Section:</p>
					</div>
					<div className={style.timezone__selectWrapper}>
						<Select
							className={style.timezone__select}
							value={timeZone}
							onChange={handleTimeZoneChange}
							IconComponent={DropdownIcon}
						>
							{TIME_ZONES.map(({ value }) => (
								<MenuItem key={value} value={value}>
									{value}
								</MenuItem>
							))}
						</Select>
					</div>
				</div>
				<div className={style.timezone__block}>
					<div className={style.timezone__title}>
						<p>Section:</p>
					</div>
					<div className={style.timezone__selectWrapper}>
						<Select
							className={style.timezone__select}
							value={timeZone2}
							onChange={handleTimeZoneChange2}
							IconComponent={DropdownIcon}
						>
							{TIME_ZONES2.map(({ value }) => (
								<MenuItem key={value} value={value}>
									{value}
								</MenuItem>
							))}
						</Select>
					</div>
				</div>
			</div>
		</div>
	);
}
