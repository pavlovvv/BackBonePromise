import { useState } from "react";
import PopUp_Delete from "./popUp_Delete";

function ExampleComponent() {
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isLinkDeletePopupOpen, setLinkDeletePopupOpen] = useState(false);

  const handleDelete = () => {
    console.log("Delete confirmed");
    setDeletePopupOpen(false);
  };

  const handleSuccessClose = () => {
    setSuccessPopupOpen(false);
  };

  const handleLinkDelete = () => {
    console.log("Link deleted");
    setLinkDeletePopupOpen(false);
  };

  const closeDeletePopup = () => setDeletePopupOpen(false);
  const closeLinkDeletePopup = () => setLinkDeletePopupOpen(false);

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => setDeletePopupOpen(true)}>
          Open Delete Popup
        </button>
        <button onClick={() => setSuccessPopupOpen(true)}>
          Open Success Popup
        </button>
        <button onClick={() => setLinkDeletePopupOpen(true)}>
          Open Link Delete Popup
        </button>
      </div>

      <div style={{display:"flex" , flexDirection:"column" , gap:"30px"}}>
        {isDeletePopupOpen && (
          <PopUp_Delete
            title="Delete"
            message="Are you sure?"
            confirmText="No"
            cancelText="Delete"
            showCancel
            onConfirm={handleDelete}
            onCancel={closeDeletePopup}
          />
        )}

        {isSuccessPopupOpen && (
          <PopUp_Delete
            title="Successfully!"
            message="Your password changed."
            confirmText="Ok"
            onConfirm={handleSuccessClose}
            onCancel={handleSuccessClose}
            showCancel
          />
        )}

        {isLinkDeletePopupOpen && (
          <PopUp_Delete
            message=""
            title="Delete link to your profile?"
            confirmText="No"
            cancelText="Delete"
            showCancel
            onConfirm={handleLinkDelete}
            onCancel={closeLinkDeletePopup}
          />
        )}
      </div>
    </div>
  );
}
export default ExampleComponent;
