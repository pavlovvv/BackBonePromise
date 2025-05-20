// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// type CardPopupProps = {
//   mode: "add" | "edit";
//   initialValues?: {
//     number?: string;
//     expiration?: string;
//     cvc?: string;
//     zip?: string;
//   };
//   onClose: () => void;
// };

// const formatCardNumber = (value: string) =>
//   value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();

// const formatExpiration = (value: string) => {
//   const cleaned = value.replace(/\D/g, "");
//   if (cleaned.length >= 3) {
//     return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
//   }
//   return cleaned;
// };

// const CardPopup: React.FC<CardPopupProps> = ({
//   mode,
//   initialValues = {},
//   onClose,
// }) => {
//   const [number, setNumber] = useState(initialValues.number || "");
//   const [expiration, setExpiration] = useState(initialValues.expiration || "");
//   const [cvc, setCvc] = useState(initialValues.cvc || "");
//   const [zip, setZip] = useState(initialValues.zip || "");
//   const [showCVC, setShowCVC] = useState(false);

//   const handleSubmit = () => {
//     const data = { number, expiration, cvc, zip };
//     console.log(`${mode === "add" ? "Adding" : "Updating"} card:`, data);
//     onClose();
//   };

//   return (
//     <Dialog open onClose={onClose} fullWidth maxWidth="sm">
//       <DialogTitle>
//         {mode === "add" ? "Add new card" : "Edit card"}
//       </DialogTitle>
//       <DialogContent>
//         <TextField
//           fullWidth
//           label="Card number"
//           placeholder="XXXX XXXX XXXX XXXX"
//           value={number}
//           onChange={(e) => setNumber(formatCardNumber(e.target.value))}
//           margin="normal"
//         />
//         <div style={{ display: "flex", gap: "1rem" }}>
//           <TextField
//             label="Expiration"
//             placeholder="MM/YY"
//             value={expiration}
//             onChange={(e) => setExpiration(formatExpiration(e.target.value))}
//             margin="normal"
//             fullWidth
//           />
//           <TextField
//             label="CVC"
//             placeholder="***"
//             type={showCVC ? "text" : "password"}
//             value={cvc}
//             onChange={(e) => setCvc(e.target.value)}
//             margin="normal"
//             fullWidth
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={() => setShowCVC(!showCVC)}>
//                     {showCVC ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </div>
//         <TextField
//           fullWidth
//           label="ZIP"
//           placeholder="XXXXX"
//           value={zip}
//           onChange={(e) => setZip(e.target.value)}
//           margin="normal"
//         />
//       </DialogContent>
//       <DialogActions>
//         {mode === "edit" && (
//           <Button onClick={onClose} color="secondary">
//             Cancel
//           </Button>
//         )}
//         <Button onClick={handleSubmit} variant="contained" color="primary">
//           {mode === "edit" ? "Update" : "Add"}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default CardPopup;

import React, { useState } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';import "./CardPopup.css";

type CardPopupProps = {
  mode: "add" | "edit";
  initialValues?: {
    number?: string;
    expiration?: string;
    cvc?: string;
    zip?: string;
  };
  onClose: () => void;
};

const formatCardNumber = (value: string) =>
  value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();

const formatExpiration = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length >= 3) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
  }
  return cleaned;
};

const CardPopup: React.FC<CardPopupProps> = ({
  mode,
  initialValues = {},
  onClose,
}) => {
  const [number, setNumber] = useState(initialValues.number || "");
  const [expiration, setExpiration] = useState(initialValues.expiration || "");
  const [cvc, setCvc] = useState(initialValues.cvc || "");
  const [zip, setZip] = useState(initialValues.zip || "");
  const [showCVC, setShowCVC] = useState(false);

  const handleSubmit = () => {
    const data = { number, expiration, cvc, zip };
    console.log(`${mode === "add" ? "Adding" : "Updating"} card:`, data);
    onClose();
  };

  return (
    <div className="card-popup">
      <div  className="card-popup__header">
        {mode === "edit" ? (
          <h2 style={{color:"#000",font:"400 32px PT Serif"}}>Edit card</h2>
        ) : (
          <div style={{display:"flex" , gap:"24px"}}>
            <button style={{font:"400 18px Open Sans"}} className="card-popup__back"><span style={{marginRight:"15px", fontSize:"20px"}}>{"<"}</span> Back</button>
            <h2 style={{font:"400 32px PT Serif",color:"#000"}} >Add new card</h2>
          </div>
        )}
        <button className="card-popup__close" onClick={onClose}>×</button>
      </div>

      <div className="card-popup__form">
        <label style={{color:"#000"}}>
          <p>Card number</p>
          <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            value={number}
            onChange={(e) => setNumber(formatCardNumber(e.target.value))}
          />
        </label>

        <div className="card-popup__row">
          <label style={{color:"#000"}}>
            <p>Expiration</p>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiration}
              onChange={(e) => setExpiration(formatExpiration(e.target.value))}
            />
          </label>

          <label style={{color:"#000"}}>
            <p>CVC</p>
            
            <div className="card-popup__input-icon">
              <input
                type={showCVC ? "text" : "password"}
                placeholder="***"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
              <span style={{top:"20px"}} onClick={() => setShowCVC(!showCVC)}>
                {showCVC ? <VisibilityOffOutlinedIcon sx={{ color: "#fff" }} fontSize="small" /> : <VisibilityOutlinedIcon sx={{ color: "#fff" }} fontSize="small" />}
              </span>
            </div>
          </label>
        </div>

        <label style={{color:"#000"}}>
          <p>ZIP</p>
          <input
            type="text"
            placeholder="XXXXX"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </label>
      </div>

      <div className="card-popup__actions">
        {mode === "edit" && (
          <button style={{flexBasis:"50%",maxWidth:"none"}} className="btn btn--cancel" onClick={onClose}>
            Cancel
          </button>
        )}
        <button style={{flexBasis:"50%",maxWidth:"none"}} className="btn btn--primary" onClick={handleSubmit}>
          {mode === "edit" ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default CardPopup;
