import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import style from "./TabPanel.module.sass";
import { comments } from "../../../profile/constants.ts";
import { CommentItem } from "../CommentItem/CommentItem.tsx";

const ROWS_PER_PAGE = 2;

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

// Кастомна пагінація зі стрілками і цифрами
function Pagination({
	page,
	count,
	onPageChange,
}: {
	page: number;
	count: number; // загальна кількість сторінок
	onPageChange: (newPage: number) => void;
}) {
	const pages = Array.from({ length: count }, (_, i) => i);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<div className={style.timezone__button}>
				<p style={{ color: "grey", font: "400 14px Open Sans" }}>
					Showing 1-10 of 24 entries
				</p>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "end",
					alignItems: "center",
					gap: 12,
					userSelect: "none",
				}}
			>
				<button
					onClick={() => onPageChange(page - 1)}
					disabled={page === 0}
					aria-label="previous page"
					style={{
						cursor: page === 0 ? "default" : "pointer",
						fontSize: 20,
						border: "none",
						background: "none",
						padding: 4,
					}}
				>
					‹
				</button>

				{pages.map((p) => (
					<button
						key={p}
						onClick={() => onPageChange(p)}
						style={{
							color: p === page ? "#ED805B" : "black",
							cursor: "pointer",
							border: "none",
							background: "none",
							padding: "4px 8px",
							fontSize: 16,
						}}
						aria-current={p === page ? "page" : undefined}
					>
						{p + 1}
					</button>
				))}

				<button
					onClick={() => onPageChange(page + 1)}
					disabled={page === count - 1}
					aria-label="next page"
					style={{
						cursor: page === count - 1 ? "default" : "pointer",
						fontSize: 20,
						border: "none",
						background: "none",
						padding: 4,
					}}
				>
					›
				</button>
			</div>
		</div>
	);
}

export default function BasicTabs() {
	const [value, setValue] = useState(0);

	// Сторінки для кожної вкладки
	const [pageAll, setPageAll] = useState(0);
	const [pageReplied, setPageReplied] = useState(0);
	const [pageUnreplied, setPageUnreplied] = useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	// Фільтрація коментарів
	const repliedComments = comments;

	const unrepliedComments = comments.filter(
		(c) => !c.content.toLowerCase().includes("reply"),
	);

	// Пагінація (різання масиву)
	const paginate = (items: typeof comments, page: number) =>
		items.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);

	// Рендер коментарів на сторінці
	const renderComments = (items: typeof comments, page: number) =>
		paginate(items, page).map((c) => (
			<CommentItem key={c.datetime + c.author} {...c} />
		));

	// Кількість сторінок
	const getPageCount = (length: number) => Math.ceil(length / ROWS_PER_PAGE);

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
							label="All"
							{...a11yProps(0)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Replied"
							{...a11yProps(1)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Unreplied"
							{...a11yProps(2)}
						/>
					</Tabs>
				</div>

				<div className={style["tabs-content"]}>
					{/* Вкладка All */}
					<CustomTabPanel value={value} index={0}>
						{renderComments(comments, pageAll)}
						<Pagination
							page={pageAll}
							count={getPageCount(comments.length)}
							onPageChange={(p) => setPageAll(p)}
						/>
					</CustomTabPanel>

					{/* Вкладка Replied */}
					<CustomTabPanel value={value} index={1}>
						{renderComments(repliedComments, pageReplied)}
						<Pagination
							page={pageReplied}
							count={getPageCount(repliedComments.length)}
							onPageChange={(p) => setPageReplied(p)}
						/>
					</CustomTabPanel>

					{/* Вкладка Unreplied */}
					<CustomTabPanel value={value} index={2}>
						{renderComments(unrepliedComments, pageUnreplied)}
						<Pagination
							page={pageUnreplied}
							count={getPageCount(unrepliedComments.length)}
							onPageChange={(p) => setPageUnreplied(p)}
						/>
					</CustomTabPanel>
				</div>
			</div>
		</div>
	);
}
