import { useEffect, useState } from "react";
import Card from "../components/Card";
import fetchCards from "../api/FetchCards";

function CardsPage({ title, isDeletePage, isUpdatePage, setShowUpdatePopup }) {
  let [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards(setCards);
  }, []);

  return (
    <>
      <h1 className="text-5xl text-neutral-700 mb-5 cursor-default text-center">
        {title}
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap">
        {cards.length == 0 && <p>No User to show!</p>}
        {cards.map((card, index) => {
          return (
            <Card
              key={card._id} // This doesn't go to prop
              cardNo={index}
              name={card.name}
              age={card.age}
              gender={card.gender}
              // gender={card.gender}
              // isActive={card.isActive}
              isActive={true}
              isDeletePage={isDeletePage}
              cardsLength={cards.length}
              isUpdatePage={isUpdatePage}
              setShowUpdatePopup={setShowUpdatePopup}
            />
          );
        })}
        {/* OR
         {cards.map(({ name, age, gender, isActive }) => {
          return (
            <Cards name={name} age={age} gender={gender} isActive={isActive} />
          );
        })} 
        */}
      </div>
    </>
  );
}

export default CardsPage;
