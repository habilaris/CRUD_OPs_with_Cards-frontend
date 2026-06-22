import { Outlet } from "react-router-dom";
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
      {/* <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-90"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
}

export default UpdateCardsPage;
