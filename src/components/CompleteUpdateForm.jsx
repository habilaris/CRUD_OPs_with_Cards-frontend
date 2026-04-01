import { useState } from "react";
// import updateCardData from "../api/UpdateCardData";

function CompleteUpdateForm({ setShowCompleteUpdateForm }) {
  // requestStatus state is used to show the toast message after the request is made to the server and data is submitted successfully, if yes then true.
  const [requestStatus, setRequestStatus] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(null);

  const handleGender = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        id="form"
        className="text-xl shadow-xl py-6 px-8 rounded-2xl bg-neutral-50 relative w-65 md:w-fit ite"
      >
        <div className="name-container mb-4">
          <label htmlFor="name" className="block text-neutral-700 pl-3 mb-1">
            Update your name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="John Doe"
            className="bg-neutral-100 w-50 md:w-xs h-10 rounded-md pl-8 outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
          />
        </div>
        <div className="age-container mb-4">
          <label htmlFor="age" className="block text-neutral-700 pl-3 mb-1 ">
            Update your age:
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="25"
            className="bg-neutral-100 w-50 md:w-xs h-10 rounded-md pl-8 outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
          />
        </div>
        <div className="gender-container mb-4">
          <label className="block text-neutral-700 pl-3 mb-1 ">
            Update your gender:
          </label>

          <div className="gender-options text-neutral-600 ml-3 mb-6">
            <div className="inline mr-4">
              <input
                type="radio"
                name="gender"
                id="male"
                className="mr-1"
                value="Male"
                onChange={handleGender}
                checked={gender === "Male"}
                // input will be checked only in the case, if gender state will be equal to Male
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className="inline">
              <input
                type="radio"
                name="gender"
                id="female"
                className="pr-6 mr-1"
                value="Female"
                onChange={handleGender}
                checked={gender === "Female"}
                // input will be checked only in the case, if gender state will be equal to Female
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded-md w-full bg-[#48d04d] hover:bg-[#5de961] text-neutral-50 font-medium cursor-pointer transition-all ease-in duration-150"
            onClick={(event) => {
              event.preventDefault();
              if (!name) {
                console.log("Please enter something in the name field!");
              } else {
                // updateCardData();
                setRequestStatus(true);
              }
            }}
          >
            Submit
          </button>
          <button
            className="rounded-md w-full h-8 bg-[#fd3d3d] hover:bg-red-400 text-neutral-50 font-medium cursor-pointer transition-all ease-in duration-150"
            onClick={() => {
              setShowCompleteUpdateForm(false);
            }}
          >
            Discard
          </button>
        </div>
      </form>

      {/* Toast Message */}
      {requestStatus && (
        <p
          id="toast"
          className="border border-green-700 bg-green-600 shadow-2xl shadow-neutral-500 text-neutral-50 font-medium absolute bottom-22 w-96 h-10 flex justify-center items-center rounded-md"
        >
          <span className="absolute left-7 text-xl font-bold text-green-50 ">
            ✓
          </span>
          Data Submitted
        </p>
      )}
    </div>
  );
}

export default CompleteUpdateForm;
