import CardsPage from "./CardsPage";

function UpdateCardsPage({ setShowUpdatePopup }) {
  return (
    <div>
      <CardsPage
        title="Update User Cards"
        isDeletePage={false}
        isUpdatePage={true}
        setShowUpdatePopup={setShowUpdatePopup}
      />
    </div>
  );
}

export default UpdateCardsPage;
