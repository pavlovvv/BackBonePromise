import React from "react";
import "./popUp_Delete.css";

type PopupProps = {
	title: string;
	message: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
	showCancel?: boolean;
};

const PopUp_Delete: React.FC<PopupProps> = ({
	title,
	message,
	confirmText = "Ok",
	cancelText = "Cancel",
	onConfirm,
	onCancel,
	showCancel = false,
}) => {
	return (
		<div>
			<div
				style={{
					position: "fixed",
					width: "100vw",
					height: "100vh",
					background: "grey",
					zIndex: "111",
					opacity: "30%",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			></div>

			<div
				style={{
					maxWidth: "600px",
					position: "absolute",
					transform: "translate(-50%, -50%)",
					zIndex: "1232",
					top: "50%",
					left: "50%",
				}}
				className="popup-overlay"
			>
				<div
					style={{
						width: "480px ",
						height: "240px",
						display: "flex",
						flexDirection: "column",
					}}
					className="popup"
				>
					<div className="popup_close-block">
						<button
            style={{  border: 'none',
              fontSize: '20px',
              color:"#000",
              cursor: 'pointer',
              background: 'none'}} className="popup_close-button" onClick={onCancel}>
							Х
						</button>
					</div>
					<div style={{ flex: "1" }} className="qwe">
						<div className="popup_info-block">
							<h2 style={{ color: "#000" }}>{title}</h2>
							<p style={{ color: "#000" }}>{message}</p>
						</div>
						<div className="popup-actions">
							{showCancel && (
								<button className="btn cancel" onClick={onCancel}>
									{cancelText}
								</button>
							)}
							<button className="btn confirm" onClick={onConfirm}>
								{confirmText}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopUp_Delete;
