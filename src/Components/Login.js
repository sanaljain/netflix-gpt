import { useState } from "react";
import Header from "./Header";
import { useRef } from "react";
import { checkValidation } from "../Utils/validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGIN_BACKGROUND } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const handleValidation = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="w-screen" src={LOGIN_BACKGROUND} alt="background" />
      </div>
      <form className="w-4/12 absolute p-12 bg-black mx-auto right-0 left-0 my-24 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl py-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="pt-4 pb-2 px-4 leading-normal my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-500/80 rounded-md"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="pt-4 pb-2 px-4 leading-normal my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-500/80 rounded-md"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="pt-4 pb-2 px-4 leading-normal my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-500/80 rounded-md"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          type="button"
          className="bg-red-600 py-2 my-6 w-full rounded-md"
          onClick={handleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Nows"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
