import Header from "./Header";
import bgImg from "../images/bg-img.jpg";
import { ValidationForm } from "../utils/validate";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleValidateFrom = () => {
    //validation form
    const message = ValidationForm(email.current.value, password.current.value);
    console.log(message);
  };

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className=" h-screen w-screen">
        <div className="w-full bg-black h-full absolute bg-opacity-65"></div>
        <img src={bgImg} alt="bg-img" className="h-full w-full" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 mx-auto left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 bg-black px-10 py-5 flex flex-col bg-opacity-70 rounded-lg"
      >
        <h1 className="font-bold text-white text-3xl text-center m-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-3 p-3 bg-zinc-800 font-bold outline-none text-white rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="m-3 p-3 bg-zinc-800 font-bold outline-none text-white rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-3 p-3 bg-zinc-800 font-bold outline-none text-white rounded-lg"
        />
        <button
          className="m-3 p-3 bg-red-500 rounded-lg"
          onClick={handleValidateFrom}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && (
          <span className="text-white mx-3 my-2 cursor-pointer hover:underline w-36 p-1 ">
            Forget Password?
          </span>
        )}

        <div className="text-white m-3 py-3">
          {isSignIn ? "New to Netflix? " : "Already User? "}
          <span onClick={handleToggleForm} className="underline cursor-pointer">
            {isSignIn ? "SignUp Now" : "SignIn Now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
