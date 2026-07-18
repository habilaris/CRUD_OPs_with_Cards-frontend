import { useState } from "react";
import uploadCardData from "../api/UploadCardData";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [requestStatus, setRequestStatus] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center">
        <form
          id="form"
          className="text-xl shadow-xl py-6 px-8 rounded-2xl bg-neutral-50 relative w-65 md:w-fit flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl text-neutral-700 text-center mb-8 flex justify-center items-center font-medium">
            Sign Up
          </h1>

          <fieldset className="mb-4 border-2 border-neutral-200 rounded-xl p-3 md:p-4 flex flex-col justify-center items-center">
            {/* Add a username label and input here */}
            <div className="username-container mb-4">
              <label
                htmlFor="username"
                className="block text-neutral-700 pl-3 mb-1"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="john_doe"
                className="bg-neutral-100 w-full md:w-xs pl-6 md:pl-8 h-10 rounded-md outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
              />
            </div>

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
                className="bg-neutral-100 w-full md:w-xs pl-6 md:pl-8 h-10 rounded-md outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
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
                className="bg-neutral-100 w-full md:w-xs pl-5 md:pl-8 h-10 rounded-md outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
              />
            </div>

            <div className="confirm-password-container mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-neutral-700 pl-3 mb-1"
              >
                Confirm password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="••••••••"
                className="bg-neutral-100 w-50 md:w-xs h-10 rounded-md pl-8 outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
              />
            </div>

            <div className="role-container mb-4">
              <label
                htmlFor="role"
                className="block text-neutral-700 pl-3 mb-1"
              >
                Select Role:
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                className="bg-neutral-100 w-full md:w-xs h-10 rounded-md pl-6 md:pl-8 outline-none shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]"
              >
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
                <option value="admin">Admin</option>
              </select>
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
            Sign Up
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
            Sign Up successful!
          </p>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
