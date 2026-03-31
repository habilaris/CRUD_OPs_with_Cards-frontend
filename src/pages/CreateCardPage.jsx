import React from "react";
import CardForm from "../components/CardForm";

function CreateCardPage() {
  return (
    <div>
      <h1 className="text-5xl text-neutral-700 text-center mb-4 flex justify-center items-center">
        Create Your Card
      </h1>
      <CardForm />
    </div>
  );
}

export default CreateCardPage;
