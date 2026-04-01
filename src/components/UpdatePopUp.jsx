import React from "react";

function UpdatePopUp({ setShowUpdatePopup, setShowCompleteUpdateForm }) {
  return (
    <div className="bg-neutral-100 p-6 rounded-xl shadow-md relative">
      <label className="block font-semibold text-neutral-800">
        Do you want to update the card completely or partially?
      </label>
      <p className="text-neutral-600">
        Select an option to proceed with the update.
      </p>
      <div className="flex gap-2">
        <button
          className="bg-[#48d04d] hover:bg-[#5de961] text-white px-4 py-2 rounded-2xl mt-4 transition-colors duration-200 cursor-pointer"
          onClick={() => {
            setShowCompleteUpdateForm(true);
            setShowUpdatePopup(false);
          }}
        >
          Complete
        </button>
        <button
          className="text-white px-4 py-2 rounded-2xl mt-4 disabled:bg-neutral-500 cursor-not-allowed"
          disabled
        >
          Partial
        </button>

        <button
          className="bg-[#fd3d3d] hover:bg-red-400 text-white px-4 py-2 rounded-full mt-4 transition-colors duration-200 cursor-pointer absolute right-6"
          onClick={() => {
            setShowUpdatePopup(false);
          }}
        >
          Discard
        </button>
      </div>
    </div>
  );
}

export default UpdatePopUp;
