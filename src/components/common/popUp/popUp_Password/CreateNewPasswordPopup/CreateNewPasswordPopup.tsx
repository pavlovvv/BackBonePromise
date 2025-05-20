import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./CreateNewPasswordPopup.css";

const CreateNewPasswordPopup: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);

  const isLengthValid = password.length >= 8 && password.length <= 20;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);

  const isValid =
    isLengthValid && hasLower && hasUpper && hasDigit && password === confirm;

  const handleSubmit = () => {
    if (isValid) {
      console.log("New password:", password);
      onClose();
    }
  };

  return (
    <div style={{ padding: "24px", maxWidth:"600px" }} className="popup">
      <div className="popup__header">
        <h2 style={{ font: "400 32px PT Serif" }}>Create new password</h2>
        <button style={{fontSize:"30px"}} className="popup__close" onClick={onClose}>
          ×
        </button>
      </div>
      <div style={{display:"flex" , flexDirection:"column" , gap:"24px" , marginBottom:"190px"}} className="popup_Block1">
        <div style={{ border: "none", padding: "0" }} className="popup__field">
          <label style={{ font: "400 18px Open Sans" }}>New password</label>
          <div style={{ marginTop: "16px", marginBottom:"8px" , height:"60px" }} className="popup__input-icon">
            <input
              style={{paddingLeft:"0"}}
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
          <p className="popup__hint">
            <span
              style={{ font: "400 14px Open Sans" }}
              className={isLengthValid ? "green" : ""}
            >
              Between 8 and 20 characters
            </span>
            <br />
            <span
              style={{ font: "400 14px Open Sans" }}
              className={hasLower ? "green" : ""}
            >
              1 lowercase letter
            </span>
            ,{" "}
            <span
              style={{ font: "400 14px Open Sans" }}
              className={hasUpper ? "green" : ""}
            >
              1 uppercase letter
            </span>
            ,{" "}
            <span
              style={{ font: "400 14px Open Sans" }}
              className={hasDigit ? "green" : ""}
            >
              1 digit
            </span>
          </p>
        </div>
        <div style={{ border: "none", padding: "0" }} className="popup__field">
          <label style={{ font: "400 18px Open Sans" }}>
            Confirm new password
          </label>
          <div style={{ marginTop: "16px",height:"60px" }} className="popup__input-icon">
            <input
              style={{paddingLeft:"0"}}
              type="password"
              placeholder="Confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <Visibility fontSize="small" className="popup__icon" />
          </div>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"end"}}>
        <button
          style={{flexBasis:"50%", font:"400 18px Open Sans"}}
          className="popup__submit"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Reset password
        </button>
      </div>
      
    </div>
  );
};

export default CreateNewPasswordPopup;
