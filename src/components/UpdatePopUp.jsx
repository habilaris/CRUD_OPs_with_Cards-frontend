import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePopUp() {
  const navigate = useNavigate();
  const { cardId } = useParams();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-90">
      <div className="bg-neutral-100 p-6 rounded-xl shadow-md relative">
        <label className="block font-semibold text-neutral-800">
          Do you want to update the card completely or partially?
        </label>
        <p className="text-neutral-600">
          Select an option to proceed with the update.
        </p>
        <div className="flex gap-2">
          {/* Complete Update Button */}
          <button
            className="bg-[#48d04d] hover:bg-[#5de961] text-white px-4 py-2 rounded-2xl mt-4 transition-colors duration-200 cursor-pointer"
            onClick={() => {
              navigate(`/admin/update-cards/complete-update/${cardId}`);
              console.log(cardId);
            }}
          >
            Complete
          </button>

          {/* Partial Update Button */}
          <button
            className="text-white px-4 py-2 rounded-2xl mt-4 disabled:bg-neutral-500 cursor-not-allowed"
            disabled
          >
            Partial
          </button>

          {/* Discard Button */}
          <button
            className="bg-[#fd3d3d] hover:bg-red-400 text-white px-4 py-2 rounded-full mt-4 transition-colors duration-200 cursor-pointer absolute right-6"
            onClick={() => {
              navigate("/admin/update-cards");
            }}
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatePopUp;
