import Logo from "../images/Netflix-GPT.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteUser, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptPage } from "../utils/gptSlice";
import { MULTI_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => err);
  };
  const handleDeleteAccount = () => {
    deleteUser(auth.currentUser)
      .then(() => {})
      .catch((error) => error);
  };

  const handleGptPage = () => {
    // toggle featurd to turn page
    dispatch(toggleGptPage());
  };

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="md:w-screen md:h-16 px-2 fixed bg-black bg-opacity-95 shadow-2xl  top-0 flex justify-between items-center md:px-8 md:py-2 z-20 left-0 right-0">
      <div className=" ">
        <img src={Logo} alt="logo" className="shadow-2xl  w-36 md:w-52" />
      </div>
      <div className="flex items-center">
        {(showGpt || !user) && (
          <select
            onChange={handleLanguage}
            className="bg-gray-800 text-white w-12 md:w-auto rounded-md outline-none"
          >
            {MULTI_LANG.map((lang) => (
              <option
                key={lang.langKey}
                value={lang.langKey}
                className="text-sm "
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        {user && (
          <div className="flex items-center gap-1">
            <button
              className="px-2 md:py-1 m-2 text-white bg-indigo-800 rounded-lg hover:bg-indigo-900 hover:text-red-500"
              onClick={handleGptPage}
            >
              {showGpt ? "Home " : "Gpt Search"}
            </button>
            <div className="hidden md:inline-block text-white bg-black bg-opacity-40 p-1  rounded-md shadow-lg capitalize font-semibold">
              {user.displayName}
            </div>
            <div
              onClick={() => {
                setIsShown(!isShown);
              }}
              className="flex items-center relative cursor-pointer"
            >
              <img
                src={user.photoURL}
                alt="img"
                className=" w-6 md:w-8 rounded-md "
              />
              <span className="text-white rounded-full h-6 hover:text-red-700 ">
                ▼
              </span>
              {isShown && (
                <ul className="text-gray-300 w-28 py-2 absolute right-0 top-7 md:top-10 border border-slate-600 hover:border-gray-500 font-semibold rounded-lg bg-black bg-opacity-50 animate">
                  <li className="sm:hidden md:hidden px-2 p-1 items-center flex hover:text-white">
                    <span className="w-5 h-5 inline-block mr-1 rounded-md bg-orange-500 hover:text-white"></span>
                    {user.displayName}
                  </li>
                  <li className="px-2 p-1 items-center flex hover:text-white">
                    <span className="w-5 h-5 inline-block mr-1 rounded-md bg-blue-500 hover:text-white"></span>
                    UserTest
                  </li>
                  <li className="px-2 p-1 items-center flex hover:text-white">
                    <span className="w-5 h-5 inline-block mr-1 rounded-md bg-green-500 hover:text-white"></span>
                    Profile
                  </li>
                  <button
                    className="border-t-2 w-full border-slate-300 p-2 py-1 mt-1 hover:text-white"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                  <button
                    className="border-t-2 w-full text-red-400 text-sm font-bold border-slate-300 p-1 py-2 mt-1 hover:text-red-800"
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </button>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
