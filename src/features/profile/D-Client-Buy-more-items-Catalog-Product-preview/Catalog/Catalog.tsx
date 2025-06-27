import style from "./Catalog.module.sass";
import Swipers from "./Swiper/Swiper";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

function Catalog() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedColor, setSelectedColor] = useState<string>("black");
	const [selectedSize, setSelectedSize] = useState<string>("Xs");
	const [count, setCount] = useState(0);

	return (
		<div className={style.catalog}>
			<div className={style.catalog__container}>
				<div className={style.catalog__swiper}>
					<div className={style["catalog__swiper-block"]}>
						<Swipers />
					</div>
				</div>

				<div className={style["clothes"]}>
					<div className={style["clothes__title"]}>
						<p>In A Better World T-Shirt</p>
					</div>

					<div className={style["clothes__price"]}>
						<p>59$</p>
					</div>
					<div className={style["clothes__wrraper"]}>
						<div className={style["clothes__size"]}>
							<p>
								Size : <span>{selectedSize}</span>
							</p>
							<div
								className={style["clothes__size-block"]}
								style={{ cursor: "pointer" }}
							>
								<div
									className={`${selectedSize === "Xs" ? style["clothes__size--active"] : ""}`}
									onClick={() => setSelectedSize("Xs")}
								>
									Xs
								</div>
								<div
									className={`${selectedSize === "S" ? style["clothes__size--active"] : ""}`}
									onClick={() => setSelectedSize("S")}
								>
									S
								</div>
								<div
									className={`${selectedSize === "M" ? style["clothes__size--active"] : ""}`}
									onClick={() => setSelectedSize("M")}
								>
									M
								</div>
								<div
									className={`${selectedSize === "L" ? style["clothes__size--active"] : ""}`}
									onClick={() => setSelectedSize("L")}
								>
									L
								</div>
								<div
									className={`${selectedSize === "XL" ? style["clothes__size--active"] : ""}`}
									onClick={() => setSelectedSize("XL")}
								>
									XL
								</div>
							</div>
						</div>

						<div className={style["clothes__color"]}>
							<p>
								Color : <span>{selectedColor}</span>
							</p>
							<div className={style["clothes__color-block"]}>
								<div
									className={`
                                        ${style["clothes__color-block--black"]}
                                        ${selectedColor === "Black" ? style["clothes__color-block--active"] : ""}
                                    `}
									onClick={() => setSelectedColor("Black")}
								></div>
								<div
									className={`
                                        ${style["clothes__color-block--white"]}
                                        ${selectedColor === "White" ? style["clothes__color-block--active"] : ""}
                                    `}
									onClick={() => setSelectedColor("White")}
								></div>
							</div>
						</div>

						<div className={style.clothes__availability}>
							<p>
								Availability: <span>In stock, and ready to ship </span>
							</p>
						</div>

						<div className={style.clothes__quantity}>
							<p>Quantity: </p>
							<div className={style["clothes__quantity-input"]}>
								<p
									className={style["clothes__quantity-input--hover"]}
									onClick={() => {
										if (count > 0) setCount(count - 1);
									}}
								>
									-
								</p>
								<p>{count}</p>
								<p
									className={style["clothes__quantity-input--hover"]}
									onClick={(_e) => setCount(count + 1)}
								>
									+
								</p>
							</div>
						</div>
						<div className={style.clothes__description}>
							<AnimatePresence initial={false}>
								<div
									className={style["clothes__description--title"]}
									onClick={() => setIsOpen((prev) => !prev)}
								>
									<p>Description</p>
									<img
										src={ArrowIconSrc}
										alt=""
										className={`${style["clothes__arrow"]} ${isOpen ? style["clothes__arrow--open"] : ""}`}
									/>
								</div>

								{isOpen && (
									<motion.div
										className={style["clothes__description--dropDown"]}
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										style={{
											overflow: "hidden",
											marginBottom: "16px",
											color: "#444",
										}}
										onClick={() => setIsOpen((prev) => !prev)}
									>
										<p>
											Indulge in the cosmic beauty of our In A Better World T-Shirt.
											Inspired by galaxies and infused with the hope for a brighter
											tomorrow, this t-shirt will elevate your style and mindset. A
											statement loungewear set that speaks to the dreamer in you. Lorem
											ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor
											sit amet quam faucibus ultrices. Lorem ipsum dolor sit amet,
											consectetur adipiscing elit.{" "}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catalog;
