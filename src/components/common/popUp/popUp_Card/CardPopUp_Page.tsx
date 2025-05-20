import  { useState } from "react";
import CardPopup from "./CardPopup"; 

const CardPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [editMode, setEditMode] = useState<"add" | "edit">("add");

  const handleAddClick = () => {
    setEditMode("add");
    setShowPopup(true);
  };

  const handleEditClick = () => {
    setEditMode("edit");
    setShowPopup(true);
  };

  return (
    <div className="card-page">
      <h1>Cards</h1>
      <div style={{display:"flex" , gap:"20px", height:"50px"}} className="card-page__buttons">
        <button onClick={handleAddClick}>Add New Card</button>
        <button onClick={handleEditClick}>Edit Card</button>
      </div>

      {showPopup && (
        <CardPopup
          mode={editMode}
          initialValues={
            editMode === "edit"
              ? {
                  number: "1234 5678 9012 3456",
                  expiration: "06/25",
                  cvc: "123",
                  zip: "54321",
                }
              : {}
          }
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default CardPage;
