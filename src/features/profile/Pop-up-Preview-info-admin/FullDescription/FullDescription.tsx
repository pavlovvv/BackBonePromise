import style from "./FullDescription.module.sass";

function FullDescription() {
	return (
		<div className={style.description}>
			<div className={style.description__container}>
				<div className={style["description__title-block"]}>
					<p className={style["description__title"]}>Name of section 1</p>
					<p className={style["description__text"]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor
						sit amet quam faucibus ultrices. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Quisque at dolor sit amet quam faucibus ultrices.Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor sit
						amet quam faucibus ultrices.Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.{" "}
					</p>
				</div>
				<div className={style["description__title-block"]}>
					<p className={style["description__sub-title"]}>Name of section 1</p>
					<p className={style["description__text"]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor
						sit amet quam faucibus ultrices. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Quisque at dolor sit amet quam faucibus ultrices.Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor sit
						amet quam faucibus ultrices.Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.{" "}
					</p>
				</div>
				<div className={style.description__list}>
					<p>Description:</p>
					<ol>
						<li>Point 1</li>
						<li>Point 2</li>
						<li>Point 3</li>
						<li>Point 4</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default FullDescription;
