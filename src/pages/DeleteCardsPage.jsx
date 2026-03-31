import React from "react";
import CardsPage from "./CardsPage";

function DeleteCardsPage() {
  return (
    <div>
      <CardsPage title="Delete User Cards" isDeletePage={true} />
    </div>
  );
}

export default DeleteCardsPage;
