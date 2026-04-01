import { useEffect, useState } from "react";
import CardsPage from "./pages/CardsPage";
import HomePage from "./pages/HomePage";
import CreateCardPage from "./pages/CreateCardPage";
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import DeleteCardsPage from "./pages/DeleteCardsPage";
import Footer from "./components/Footer";
import UpdateCardsPage from "./pages/UpdateCardsPage";

function App() {
  // Flow of props: App -> UpdateCardsPage -> CardsPage -> Card
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  console.log("showUpdatePopup:", showUpdatePopup);
  useEffect(() => {
    console.log(showUpdatePopup);
  }, [showUpdatePopup]);

  return (
    <BrowserRouter>
      <div className="bg-neutral-200 w-dvw min-h-dvh flex flex-col items-center justify-center py-35 px-10">
        {showUpdatePopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-90">
            <div className="bg-neutral-100 p-6 rounded-xl shadow-md relative">
              <label className="block font-semibold text-neutral-800">
                Do you want to update the card completely or partially?
              </label>
              <p className="text-neutral-600">
                Select an option to proceed with the update.
              </p>
              <div className="flex gap-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-2xl mt-4 hover:bg-green-500 transition-colors duration-200 cursor-pointer">
                  Complete
                </button>
                <button
                  className="text-white px-4 py-2 rounded-2xl mt-4 disabled:bg-neutral-500 cursor-not-allowed"
                  disabled
                >
                  Partial
                </button>

                <button
                  className="bg-orange-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-400 transition-colors duration-200 cursor-pointer absolute right-6"
                  onClick={() => {
                    setShowUpdatePopup(false);
                  }}
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<List />} />
          <Route
            path="/admin/cards"
            element={
              <CardsPage
                title="User Cards"
                // Flow of prop: App -> DeleteCardsPage -> CardsPage -> Card
                isDeletePage={false}
                // Flow of prop: App -> UpdateCardsPage -> CardsPage -> Card
                isUpdatePage={false}
              />
            }
          />
          <Route path="/admin/create-card" element={<CreateCardPage />} />
          <Route path="/admin/delete-cards" element={<DeleteCardsPage />} />
          <Route
            path="/admin/update-cards"
            element={
              // Flow of prop: App -> UpdateCardsPage -> CardsPage -> Card
              <UpdateCardsPage setShowUpdatePopup={setShowUpdatePopup} />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// Next task!
// 1. User will be able add its info(name, age, gender etc)
// through input fields(form).
// 2. The user will be then able to see its information on a page.
// 3. You can store that information permanently by adding a database (MongoDB).
// 4. Also practice with .filter() and .sort() method.
