/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";
import sunvestAPI from "../utils/APIlib";
import { useRouter } from "next/router";
import Cookie from "universal-cookie"
import {get} from "idb-keyval"
import firebase from "firebase/app"
import { fireBaseConfig } from "../config";
require("firebase/auth")
export default function Example() {
  let cookieRef = useRef(new Cookie())
  let firebaseApp = useRef(null)
  let [loginContract, setLoginContract] = useState({});
  let [firebaseError, setFirebaseError] = useState(null)
  let router = useRouter();
  let inputCb = useCallback(
    (e) => {
      setLoginContract({ ...loginContract, [e.target.name]: e.target.value });
    },
    [loginContract]
  );
  let [validationError, setValidationError] = useState(null);
  let submitCb = useCallback((e) => {
      firebase.auth().signInWithEmailAndPassword(loginContract.email, loginContract.password)
      .then(userCred => {
        router.push("/dashboard")
      })
      .catch((err) => {
        setFirebaseError(err.message)
      })
     
      e.preventDefault();
    },
    [loginContract, router]
  );

  useEffect(() => {
    if(firebase.apps.length === 0) firebase.initializeApp(fireBaseConfig)
  }, [])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard")
        // ...
      } else {
        
      }
    });
  })
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/logo-dark.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {firebaseError ? (
          <div className="text-sm p-4 rounded-lg bg-red-100 border border-red-500 text-red-500">
            {firebaseError}
          </div>
        ) : null}
        
        <form
          onSubmit={submitCb}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              {validationError?.email?.map((v, i) => (
                <span key={i} className="text-sm text-red-500">
                  {v}
                </span>
              ))}
              <input
                id="email-address"
                name="email"
                onChange={inputCb}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              {validationError?.password?.map((v, i) => (
                    <span key={i} className="text-sm text-red-500">
                      {v}
                    </span>
                  ))}
              <input
                id="password"
                name="password"
                type="password"
                onChange={inputCb}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/passwordReset"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
