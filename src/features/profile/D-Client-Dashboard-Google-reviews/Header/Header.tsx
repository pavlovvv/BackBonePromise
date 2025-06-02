import {
	MenuItem,
	Select,
	SelectChangeEvent,
	SelectProps,
} from "@mui/material";
import { useState } from "react";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
import style from "./Header.module.sass";
import Star from "../assets/Star.svg";
import arrow from "../assets/arrow.svg";
import arrow2 from "../assets/arrow2.svg";

// Тип часової зони
type TimeZoneOption = "Reviews" | "Reviews" | "Reviews";

// Варіанти часових зон
const TIME_ZONES: Array<{ value: TimeZoneOption }> = [
	{
		value: "Reviews",
	},
	{ value: "Reviews" },
	{ value: "Reviews" },
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

	const handleTimeZoneChange: SelectProps["onChange"] = (
		event: SelectChangeEvent<unknown>
	) => {
		setTimeZone(event.target.value as TimeZoneOption);
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

				<div className={style.timezone__rate} >
					<p className={style.title}>4</p>
					<div>
						<img src={Star} alt="" />
						<img src={Star} alt="" />
						<img src={Star} alt="" />
						<img src={Star} alt="" />
						<img src={Star} alt="" />
					</div>
					<p className={style.reviews}>(52 reviews)</p>
				</div>
				<div className={style.timezone__button} >
					
					<button><img src={arrow} alt="" />Reply to reviews</button>
					<button className={style.whiteColor}> <img src={arrow2} alt="" />Get more reviews</button>
				</div>
			</div>
		</div>
	);
}
