
// import React, { useState } from "react";
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import "./ResetPasswordPopup.css";

// const ResetPasswordPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = () => {
//     console.log("Request reset for:", email);
//     onClose();
//   };

//   return (
//     <div className="popup" style={{ padding: "24px", maxWidth: "600px" }}>
//       <div style={{marginBottom:"32px"}} className="popup__header">
//         <h2 style={{ font: "400 32px PT Serif" }}>Reset password</h2>
//         <button style={{ fontSize: "30px" }} className="popup__close" onClick={onClose}>
//           ×
//         </button>
//       </div>

//       <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom:"290px" }} className="popup_Block1">
//         <p style={{ font: "400 18px Open Sans", marginTop: "-4px", color:"#000", textAlign:"start" }}>
//           Enter your email address you used when you joined and we'll send you
//           instruction to reset your password.
//         </p>

//         <div style={{ border: "none", padding: "0" }} className="popup__field">
//           <label style={{ font: "400 18px Open Sans" }}>Email address</label>
//           <div style={{ marginTop: "16px", marginBottom: "8px", height: "60px" }} className="popup__input-icon">
//           <EmailOutlinedIcon sx={{ width: 23 +"px !important", height: 23 +"px !important", marginRight: 10+"px" , fill: "#92A1A8 !important"  }} fontSize="medium" />
//             <input
//               style={{ paddingLeft: "0",font:"400 18px Open Sans" }}
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       <div style={{ display: "flex", justifyContent: "end" }}>
//         <button
//           style={{ flexBasis: "50%", font: "400 18px Open Sans" }}
//           className="popup__submit"
//           onClick={handleSubmit}
//           disabled={!email}
//         >
//           Request password reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordPopup;


import React, { useState } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./ResetPasswordPopup.css";

const ResetPasswordPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const re =       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    ;
    return re.test(value);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log("Request reset for:", email);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError(validateEmail(value) || value === "" ? "" : "Invalid email format.");
  };

  return (
    <div className="popup" style={{ padding: "24px", maxWidth: "600px" }}>
      <div style={{marginBottom:"32px"}} className="popup__header">
        <h2 style={{ font: "400 32px PT Serif" }}>Reset password</h2>
        <button style={{ fontSize: "30px" }} className="popup__close" onClick={onClose}>
          ×
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom:"290px" }} className="popup_Block1">
        <p style={{ font: "400 18px Open Sans", marginTop: "-4px", color:"#000", textAlign:"start" }}>
          Enter your email address you used when you joined and we'll send you
          instruction to reset your password.
        </p>

        <div style={{ border: "none", padding: "0" }} className="popup__field">
          <label style={{ font: "400 18px Open Sans" }}>Email address</label>
          <div style={{ marginTop: "16px", marginBottom: "8px", height: "60px" }} className="popup__input-icon">
            <EmailOutlinedIcon sx={{ width: 23 +"px !important", height: 23 +"px !important", marginRight: 10+"px" , fill: "#92A1A8 !important"  }} fontSize="medium" />
            <input
              style={{ paddingLeft: "0",font:"400 18px Open Sans" }}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
          </div>
          {error && (
            <p style={{ color: "red", font: "400 14px Open Sans", margin: 0 }}>
              {error}
            </p>
          )}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          style={{ flexBasis: "50%", font: "400 18px Open Sans" }}
          className="popup__submit"
          onClick={handleSubmit}
          disabled={!email || !!error}
        >
          Request password reset
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPopup;
