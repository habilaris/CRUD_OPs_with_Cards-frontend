import { useState } from "react";
import uploadCardData from "../api/UploadCardData";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestStatus, setRequestStatus] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center">
        <form
          id="form"
          className="text-xl shadow-xl py-6 px-8 rounded-2xl bg-neutral-50 relative w-65 md:w-fit flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl text-neutral-700 text-center mb-8 flex justify-center items-center font-medium">
            Login
          </h1>

          <fieldset className="mb-4 border-2 border-neutral-200 rounded-xl p-3 md:p-4 flex flex-col justify-center items-center">
            <div className="email-container mb-4">
              <label
                htmlFor="email"
                className="block text-neutral-700 pl-3 mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="john.doe@example.com"
                className="bg-neutral-100 w-45 md:w-xs pl-5 md:pl-8 h-10 rounded-md outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
              />
            </div>

            <div className="password-container mb-4">
              <label
                htmlFor="password"
                className="block text-neutral-700 pl-3 mb-1"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="••••••••"
                className="bg-neutral-100 w-45 md:w-xs h-10 rounded-md pl-5 md:pl-8 outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
              />
            </div>
          </fieldset>
          <button
            className="mt-8 rounded-md w-full pb-1 bg-green-600 hover:bg-green-700 text-neutral-50 font-medium cursor-pointer transition-all ease-in duration-150 flex justify-center items-center"
            onClick={(event) => {
              event.preventDefault();
              if (!email || !password) {
                console.log("Please fill in all fields!");
              } else {
                uploadCardData(email, password);
                setRequestStatus(true);
              }
            }}
          >
            Login
          </button>
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
            Login successful!
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
