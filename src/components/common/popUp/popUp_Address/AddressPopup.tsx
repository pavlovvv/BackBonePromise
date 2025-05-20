// import React from 'react'
// import './AddressPopup.css'

// type AddressPopupProps = {
//   isEdit?: boolean
//   onClose: () => void
//   onSubmit: () => void
//   address?: {
//     streetNumber: string
//     streetName: string
//     city: string
//     state: string
//     postcode: string
//     country: string
//   }
// }

// const states = ['CA (California)', 'CO (Colorado)', 'CT (Connecticut)']

// export const AddressPopup: React.FC<AddressPopupProps> = ({
//   isEdit = false,
//   onClose,
//   onSubmit,
//   address = {
//     streetNumber: '',
//     streetName: '',
//     city: '',
//     state: '',
//     postcode: '',
//     country: ''
//   }
// }) => {
//   return (
//     <div className="popup">
//       <div className="popup__header">
//         <h2>{isEdit ? 'Edit address' : 'Add new address'}</h2>
//         <button onClick={onClose} className="popup__close">×</button>
//       </div>

//       <div className="popup__fields-row">
//         <input placeholder="Street number" defaultValue={address.streetNumber} />
//         <input placeholder="Street name" defaultValue={address.streetName} />
//       </div>

//       <input className="popup__field" placeholder="City" defaultValue={address.city} />

//       <select className="popup__field" defaultValue={address.state}>
//         {states.map((s, i) => (
//           <option key={i} value={s}>{s}</option>
//         ))}
//       </select>

//       <div className="popup__fields-row">
//         <input placeholder="Postcode" defaultValue={address.postcode} />
//         <input placeholder="Country" defaultValue={address.country} />
//       </div>

//       <div className="popup__footer">
//         {isEdit && (
//           <button className="popup__cancel" onClick={onClose}>
//             Cancel
//           </button>
//         )}
//         <button className="popup__submit" onClick={onSubmit}>
//           {isEdit ? 'Update' : 'Add'}
//         </button>
//       </div>
//     </div>
//   )
// }

import React from "react";
import "./AddressPopup.css";
import { Select, MenuItem, FormControl } from "@mui/material";

type AddressPopupProps = {
  isEdit?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  address?: {
    streetNumber: string;
    streetName: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
};

const states = ["CA (California)", "CO (Colorado)", "CT (Connecticut)"];

export const AddressPopup: React.FC<AddressPopupProps> = ({
  isEdit = false,
  onClose,
  onSubmit,
  address = {
    streetNumber: "",
    streetName: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
  },
}) => {
  const [selectedState, setSelectedState] = React.useState(address.state);

  return (
    <div style={{ maxWidth: "600px" }} className="popup">
      <div className="popup__header">
        <h2 style={{ font: "400 32px PT Serif" }}>
          {isEdit ? "Edit address" : "Add new address"}
        </h2>
        <button onClick={onClose} className="popup__close">
          ×
        </button>
      </div>

      <div
        style={{ width: "100%", marginBottom: "24px" }}
        className="popup__fields-row"
      >
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                font: "400 18px Open Sans",
                color: "#000",
                textAlign: "start",
              }}
            >
              Street number
            </p>
          </div>
          <input
            style={{ height: "60px", width: "100%" }}
            placeholder="Street number"
            defaultValue={address.streetNumber}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                font: "400 18px Open Sans",
                color: "#000",
                textAlign: "start",
              }}
            >
              Street name
            </p>
          </div>
          <input
            style={{ height: "60px", width: "100%" }}
            placeholder="Street name"
            defaultValue={address.streetName}
          />
        </div>
      </div>

      <div
        style={{ width: "100%", marginBottom: "24px" }}
        className="popup__fields-row"
      >
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                font: "400 18px Open Sans",
                color: "#000",
                textAlign: "start",
              }}
            >
              City
            </p>
          </div>
          <input
            style={{ height: "60px", width: "100%" , marginBottom:"0" }}
            className="popup__field"
            placeholder="City"
            defaultValue={address.city}
          />
        </div>
      </div>
      <div style={{marginBottom:"24px"}}>
        <div style={{marginBottom:"16px"}}>
          <p style={{font:"400 18px Open Sans" , color: "#000" , textAlign:"start"}}>State</p>
        </div>
        <FormControl fullWidth className="popup__field">
          <Select
            labelId="state-label"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "6px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccd5db",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#f27c53",
              },
            }}
          >
            {states.map((s, i) => (
              <MenuItem key={i} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div
        style={{ width: "100%", marginBottom: "24px" }}
        className="popup__fields-row"
      >
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                font: "400 18px Open Sans",
                color: "#000",
                textAlign: "start",
              }}
            >
              Post Code
            </p>
          </div>
          <input
            style={{ height: "60px", width: "100%" }}
            placeholder="Postcode"
            defaultValue={address.postcode}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                font: "400 18px Open Sans",
                color: "#000",
                textAlign: "start",
              }}
            >
              Country
            </p>
          </div>
          <input
            style={{ height: "60px", width: "100%" }}
            placeholder="Country"
            defaultValue={address.country}
          />
        </div>
      </div>

      <div className="popup__footer">
        {isEdit && (
          <button style={{font:"400 18px Open Sans",flexBasis:"50%"}} className="popup__cancel" onClick={onClose}>
            Cancel
          </button>
        )}
        <button style={{font:"400 18px Open Sans" ,flexBasis:"50%"}} className="popup__submit" onClick={onSubmit}>
          {isEdit ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};
