import { useEffect, useState } from "react";
import DarkNavBar from "../components/DarkNavBar";
import firebase from "firebase/app";
import { fireBaseConfig } from "../config";

export default function PasswordReset() {
  let [email, setEmail] = useState(null);
  let [error, setError] = useState(null);
  let [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (firebase.app.length === 0) firebase.initializeApp(fireBaseConfig);
  }, []);
  return (
    <main className="flex h-screen flex-col bg-purple-100">
      <DarkNavBar />
      <section className="h-[75vh] space-y-4 flex flex-col justify-center items-center">
          {error ? (
              <div className="bg-red-100 text-red-500 p-4 rounded-md border border-red-500">
                  {error}
              </div>
          ) : null}
        {submitted ? (
          <h1 className="text-green-500 font-bold text-3xl">
            We have sent a reset password email
          </h1>
        ) : null}
        <h1 className="text-cpurple font-bold text-3xl">
          We heard you forgot your password? Sorry
        </h1>
        <div className="h-24 w-24 rounded-full border border-green-400 p-2">
          <input
            name="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email"
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              firebase
                .auth()
                .sendPasswordResetEmail(email)
                .then((e) => {
                    setSubmitted(true)
                })
                .catch((err) => {
                    setError(err.message)
                });
            }}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Reset
          </button>
        </div>
      </section>
    </main>
  );
}
