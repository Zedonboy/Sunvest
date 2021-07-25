import { useCallback, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore"
export default function SubscribeSection() {
  let [email, setEmail] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let submitRoutine = useCallback(
    (e) => {
      firebase
        .firestore()
        .collection("subscribers")
        .add({
          created_on: new Date(),
          email,
        })
        .then((v) => {
          setSubmitted(true);
        });

      e.preventDefault();
    },
    [email]
  );
  return (
    <section className="p-12 md:h-[60vh] dark:bg-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-blue-600 text-center font-bold text-4xl">
        Let your money power a Business
      </h1>
      <p className="text-center dark:text-white mt-4">
        With your investment, a business can get a solar system that provides
        constant electricity for their daily operations, while our technology
        ensures they repay you with interest on a monthly, quarterly or annual
        basis.
      </p>
      {submitted ? (
        <div>
          <p className="text-green-500 text-4xl">
            Thanks, we will keep you updated
          </p>
        </div>
      ) : (
        <form
          onSubmit={submitRoutine}
          className="flex flex-col md:flex-row md:space-x-6 mt-4"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="w-full md:w-56 bg-gray-200"
            placeholder="Email"
          />
          <button
            type="submit"
            className="w-full md:w-auto text-white font-bold text-sm bg-blue-600 rounded-md px-6 py-2"
          >
            Sign Up Free
          </button>
        </form>
      )}
    </section>
  );
}
