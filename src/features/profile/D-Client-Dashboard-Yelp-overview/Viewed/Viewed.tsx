import style from "./Viewed.module.sass";
import Star from "../assets/Star.svg";
import shoplogo from "../assets/shoplogo.svg";

export default function Viewed() {
	return (
		<div className={style.Viewed}>
			<div className={style.Viewed__container}>
				
				<div className={style.feedback}>
					<div className={style.feedback__block}>
						<div className={style["feedback__title-block"]}>
							<p>Last 30 days</p>
							<p>Highly viewed competitors</p>
						</div>
						<div className={style["feedback__main-block"]}>
							<div className={style.feedback__rate}>
								<div>
									<img style={{width:"42px"}} src={shoplogo} alt="" />
								</div>
								<div style={{width:"100%"}}>
									<div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", marginBottom:"10px" }}>
										<p style={{ font: "400 14px Open Sans" }}>Stitch Me</p>
										<p style={{ font: "400 14px Open Sans", color:'grey' }}>6.19 ml</p>
									</div>
									<div style={{ display: "flex", gap: "30px", justifyContent:"space-between"}}>
										<div style={{display:'flex' ,gap:"10px"}}>
											<div style={{ display: "flex", gap: "2px" }}>
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
											</div>
											<p className={style.reviews}>(52)</p>
										</div>
										<p style={{color:"grey"}}>$</p>
									</div>
								</div>
							</div>
							<div className={style.feedback__rate}>
								<div>
									<img style={{width:"42px"}} src={shoplogo} alt="" />
								</div>
								<div style={{width:"100%"}}>
									<div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", marginBottom:"10px" }}>
										<p style={{ font: "400 14px Open Sans" }}>Stitch Me</p>
										<p style={{ font: "400 14px Open Sans", color:'grey' }}>6.19 ml</p>
									</div>
									<div style={{ display: "flex", gap: "30px", justifyContent:"space-between"}}>
										<div style={{display:'flex' ,gap:"10px"}}>
											<div style={{ display: "flex", gap: "2px" }}>
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
											</div>
											<p className={style.reviews}>(52)</p>
										</div>
										<p style={{color:"grey"}}>$</p>
									</div>
								</div>
							</div>
							<div className={style.feedback__rate}>
								<div>
									<img style={{width:"42px"}} src={shoplogo} alt="" />
								</div>
								<div style={{width:"100%"}}>
									<div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", marginBottom:"10px" }}>
										<p style={{ font: "400 14px Open Sans" }}>Stitch Me</p>
										<p style={{ font: "400 14px Open Sans", color:'grey' }}>6.19 ml</p>
									</div>
									<div style={{ display: "flex", gap: "30px", justifyContent:"space-between"}}>
										<div style={{display:'flex' ,gap:"10px"}}>
											<div style={{ display: "flex", gap: "2px" }}>
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
											</div>
											<p className={style.reviews}>(52)</p>
										</div>
										<p style={{color:"grey"}}>$</p>
									</div>
								</div>
							</div>
							<div className={style.feedback__rate}>
								<div>
									<img style={{width:"42px"}} src={shoplogo} alt="" />
								</div>
								<div style={{width:"100%"}}>
									<div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", marginBottom:"10px" }}>
										<p style={{ font: "400 14px Open Sans" }}>Stitch Me</p>
										<p style={{ font: "400 14px Open Sans", color:'grey' }}>6.19 ml</p>
									</div>
									<div style={{ display: "flex", gap: "30px", justifyContent:"space-between"}}>
										<div style={{display:'flex' ,gap:"10px"}}>
											<div style={{ display: "flex", gap: "2px" }}>
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
											</div>
											<p className={style.reviews}>(52)</p>
										</div>
										<p style={{color:"grey"}}>$</p>
									</div>
								</div>
							</div>
							<div className={style.feedback__rate}>
								<div>
									<img style={{width:"42px"}} src={shoplogo} alt="" />
								</div>
								<div style={{width:"100%"}}>
									<div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", marginBottom:"10px" }}>
										<p style={{ font: "400 14px Open Sans" }}>Stitch Me</p>
										<p style={{ font: "400 14px Open Sans", color:'grey' }}>6.19 ml</p>
									</div>
									<div style={{ display: "flex", gap: "30px", justifyContent:"space-between"}}>
										<div style={{display:'flex' ,gap:"10px"}}>
											<div style={{ display: "flex", gap: "2px" }}>
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
												<img src={Star} alt="" />
											</div>
											<p className={style.reviews}>(52)</p>
										</div>
										<p style={{color:"grey"}}>$</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
