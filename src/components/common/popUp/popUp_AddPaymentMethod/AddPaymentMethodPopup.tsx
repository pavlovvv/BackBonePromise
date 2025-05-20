import React, { useState } from "react";
import "./AddPaymentMethodPopup.css";
import Google_Pay_Logo from "./Google_Pay_Logo.svg";

type PaymentMethod = "credit-card" | "google-pay" | "paypal";

type AddPaymentMethodPopupProps = {
  onClose: () => void;
  onNext: (method: PaymentMethod) => void;
};

export const AddPaymentMethodPopup: React.FC<AddPaymentMethodPopupProps> = ({
  onClose,
  onNext,
}) => {
  const [selected, setSelected] = useState<PaymentMethod>("credit-card");

  return (
    <div style={{ width: "600px", maxWidth: "none" }} className="popup">
      <div style={{marginBottom:"32px"}} className="popup__header">
        <h2 style={{ font: "400 32px PT Serif" }}>Add payment method</h2>
        <button style={{fontSize:"30px"}} onClick={onClose} className="popup__close">
          ×
        </button>
      </div>

      <div style={{marginBottom:"240px"}} className="popup__methods">
        <div
          style={{padding:"16px"}}
          className={`popup__method ${
            selected === "credit-card" ? "active" : ""
          }`}
          onClick={() => setSelected("credit-card")}
        >
          <img
            style={{ width: "62px", height: "33px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="Mastercard"
          />
          <span style={{ color: "#000", font: "400 18px Open Sans" }}>
            Credit card
          </span>
        </div>

        <div
          style={{padding:"16px"}}
          className={`popup__method ${
            selected === "google-pay" ? "active" : ""
          }`}
          onClick={() => setSelected("google-pay")}
        >
          <img
            style={{ width: "62px", height: "33px" }}
            src={Google_Pay_Logo}
            alt="Google Pay"
          />
          <span style={{ color: "#000", font: "400 18px Open Sans" }}>
            Google Pay
          </span>
        </div>

        <div
          style={{padding:"16px"}}
          className={`popup__method ${selected === "paypal" ? "active" : ""}`}
          onClick={() => setSelected("paypal")}
        >
          <img
            style={{ width: "62px", height: "33px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="Paypal"
          />
          <span style={{ color: "#000", font: "400 18px Open Sans" }}>
            Paypal
          </span>
        </div>
      </div>
      <div style={{display:"flex" , justifyContent:"end"}}>
        <button
          style={{ font: "400 18px Open Sans", flexBasis:"50%" }}
          className="popup__submit"
          onClick={() => onNext(selected)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
