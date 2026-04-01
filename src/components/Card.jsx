import { useState } from "react";
import deleteCardData from "../api/DeleteCardData";

function Card({
  cardNo,
  name,
  age,
  gender,
  isActive,
  isDeletePage,
  cardsLength,
  isUpdatePage,
  setShowUpdatePopup,
}) {
  // This state is used to trigger the re-rendering of the component after the card is deleted, if the card is deleted then true. Otherwise delete will be noticeable only after the page is refreshed.
  const [cardDeleted, setCardDeleted] = useState(false);

  if (!cardDeleted) {
    return (
      <div className="card-container bg-neutral-50 text-neutral-800 shadow-md py-5 w-60 rounded-md flex flex-col items-center hover:scale-105 cursor-default transition-scale duration-100 ease-in relative">
        <p className="text-[14px] text-neutral-500 font-medium absolute left-3 top-2">
          Card No: {cardNo + 1}
        </p>
        <p className="mt-4">Name: {name}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Active: {isActive ? "True" : "False"}</p>

        {isDeletePage && (
          <button
            className="absolute right-3 top-1 text-red-500 font-semibold animate-pulse cursor-pointer hover:scale-110"
            onClick={() => {
              try {
                deleteCardData(name, age);
                setCardDeleted(true);
              } catch (error) {
                console.error(
                  "Something went wrong while deleting the card",
                  error,
                );
              }
            }}
          >
            Del
          </button>
        )}
        {isUpdatePage && (
          <button
            className="absolute right-3 top-1 text-green-500 font-semibold animate-pulse cursor-pointer hover:scale-110"
            onClick={() => {
              setShowUpdatePopup(true);
              console.log("Eheeee");
            }}
          >
            Update
          </button>
        )}
      </div>
    );
  } else {
    if (cardsLength == 0) {
      return <p>No User to show!</p>;
    }
    return;
  }
}
// OR
// function Card(props) {
/* No necessity to only name the parameter/argument "props", you can name it "prop, attributes, p" or anything. */
//   return (
//     <div className="card-container border rounded-md">
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       <p>Gender: {props.gender}</p>
//     </div>
//   );
// }

export default Card;
