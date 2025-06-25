import { useState, ChangeEvent } from "react";
import style from "./Search.module.sass";
import dandruff from "./assets/dandruff.svg";

function Search() {
	const [search, setSearch] = useState("");
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearch(value);
	};
	return (
		<div className={style.Search}>
			<div className={style.Search__block}>
				<div className={style["Search__input-block"]}>
					<img src={dandruff} alt="" />
					<input
						type="email"
						placeholder="Search"
						value={search}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
}

export default Search;
