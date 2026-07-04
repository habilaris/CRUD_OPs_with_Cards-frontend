// import { useState } from "react";
import CardsPage from "./pages/CardsPage";
import HomePage from "./pages/HomePage";
import CreateCardPage from "./pages/CreateCardPage";
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import DeleteCardsPage from "./pages/DeleteCardsPage";
import Footer from "./components/Footer";
import UpdateCardsPage from "./pages/UpdateCardsPage";
import CompleteUpdateForm from "./components/CompleteUpdateForm";
import UpdatePopUp from "./components/UpdatePopUp";
// import fetchCards from "./api/FetchCards";

function App() {
  // Flow of props: App -> UpdateCardsPage -> CardsPage -> Card
  // SHOWS UPDATE POPUP
  // const [showUpdatePopup, setShowUpdatePopup] = useState(false);

  // SHOWS COMPLETE UPDATE FORM
  // const [showCompleteUpdateForm, setShowCompleteUpdateForm] = useState(false);
  // SHOWS PARTIAL UPDATE FORM
  // const [showPartialUpdateForm, setShowPartialUpdateForm] = useState(false);

  return (
    <BrowserRouter>
      {/* UI Starts from Here */}
      <div className="bg-neutral-200 w-dvw min-h-dvh flex flex-col items-center justify-center py-35 px-10">
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

          {/* Parent Route for Update Cards */}
          <Route
            path="/admin/update-cards"
            element={
              // Flow of prop: App -> UpdateCardsPage -> CardsPage -> Card
              <UpdateCardsPage />
            }
          >
            {/* Child Routes of Update Route */}
            <Route path="update-popup/:cardId" element={<UpdatePopUp />} />
            <Route
              path="complete-update/:cardId"
              element={<CompleteUpdateForm />}
            />
          </Route>

          {/* Error Handle Page */}
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
