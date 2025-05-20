import  { useState } from "react";
import CreateNewPasswordPopup from "./CreateNewPasswordPopup/CreateNewPasswordPopup";
import  ResetPasswordPopup from "./ResetPasswordPopup/ResetPasswordPopup";

const PasswordPopupsContainer = () => {
  const [showResetPopup, setShowResetPopup] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setShowResetPopup(true)}>Reset Password</button>
        <button onClick={() => setShowCreatePopup(true)}>Create New Password</button>
      </div>

      {showResetPopup && (
        <div className="popup-container">
          <ResetPasswordPopup onClose={() => setShowResetPopup(false)} />
        </div>
      )}

      {showCreatePopup && (
        <div className="popup-container">
          <CreateNewPasswordPopup onClose={() => setShowCreatePopup(false)} />
        </div>
      )}
    </>
  );
};

export default PasswordPopupsContainer;
