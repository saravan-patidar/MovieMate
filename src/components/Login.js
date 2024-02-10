import Header from "./Header";
import bgImg from "../images/bg-img.jpg";
import { ValidationForm } from "../utils/validate";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import signIn from "../Auth/authenticate";
import signUpForm from "../Auth/register";
import lang from "../utils/languageConstants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handleValidateFrom = async () => {
    //validation form
    const message = ValidationForm(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      const userCredential = await signUpForm(
        email.current.value,
        password.current.value,
        name.current.value
      );
      dispatch(
        addUser({
          uid: userCredential?.user?.uid,
          email: userCredential?.user?.email,
          password: userCredential?.user?.password,
          displayName: userCredential?.user?.displayName,
          photoURL: userCredential?.user?.photoURL,
        })
      );
      switch (userCredential?.error?.code) {
        case "auth/email-already-in-use":
          setErrorMessage("Email you provided is already registered.");
          break;

        default:
          setErrorMessage("Something went wrong with your credentials.");
          break;
      }
      // createUserWithEmailAndPassword(
      //   auth,
      //   email.current.value,
      //   password.current.value
      // )
      //   .then((userCredential) => {
      //     const user = userCredential.user;
      //     updateProfile(user, {
      //       displayName: name.current.value,
      //       photoURL: UserLogo,
      //     })
      //       .then(() => {
      //         const { uid, email, displayName, photoURL } = auth.currentUser;
      //         dispatch(
      //           addUser({
      //             uid: uid,
      //             email: email,
      //             displayName: displayName,
      //             photoURL: photoURL,
      //           })
      //         );
      //       })
      //       .catch((error) => {
      //         setErrorMessage(error.message);
      //       });
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     console.log(errorCode);
      //     setErrorMessage(errorCode + "-" + errorMessage);
      //   });
    } else {
      const userCredential = await signIn(
        email.current.value,
        password.current.value
      );
      switch (userCredential?.error?.code) {
        case "auth/invalid-credential": {
          setErrorMessage("Invalid login Credential !!");
          break;
        }
        case "auth/user-disabled": {
          setErrorMessage("Your account has been disabled!");
          break;
        }
        default: {
          setErrorMessage("Something went Wrong !!");
        }
      }
    }
  };

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  console.log(lang[langKey]?.signIn, lang[langKey]?.now);
  return (
    <div>
      <Header />
      <div className=" h-screen w-screen">
        <div className="w-full object-cover bg-black h-full absolute bg-opacity-40 md:bg-opacity-65"></div>
        <img src={bgImg} alt="bg-img" className="h-full w-full" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="sm:min-w-96 absolute w-[95%] md:w-4/12 mx-auto left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 bg-black px-5 md:px-10 py-5 flex flex-col bg-opacity-70 rounded-lg"
      >
        <h1 className="font-bold text-white text-3xl text-center m-2">
          {isSignIn ? lang[langKey]?.signIn : lang[langKey]?.signUP}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder={lang[langKey]?.fname}
            className="m-3 p-3 bg-zinc-800 font-bold outline-none text-white rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder={lang[langKey]?.Email}
          className="m-3 p-3 bg-zinc-800 font-bold outline-none text-white rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder={lang[langKey]?.pass}
          className="m-3 p-3 bg-zinc-800 font-bold outline-none text-white rounded-lg"
        />
        <p className="text-red-700 font-bold p-2">{errorMessage}</p>
        <button
          className="m-3 p-3 bg-red-500 rounded-lg"
          onClick={handleValidateFrom}
        >
          {isSignIn ? lang[langKey]?.signIn : lang[langKey]?.signUP}
        </button>

        {isSignIn && (
          <span className="text-white mx-3 my-2 cursor-pointer hover:underline w-36 p-1 ">
            {lang[langKey]?.forgetPass}
          </span>
        )}

        <div className="text-white m-3 py-3">
          {isSignIn ? lang[langKey]?.netToFlix : lang[langKey]?.already}
          <span
            onClick={handleToggleForm}
            className="underline cursor-pointer hover:text-red-500"
          >
            {isSignIn
              ? lang[langKey]?.signIn + " " + lang[langKey]?.now
              : lang[langKey]?.signUP + " " + lang[langKey]?.now}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
