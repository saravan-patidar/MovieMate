import Logo from "../images/Netflix-GPT.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteUser, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
      .catch((error) => console.log(error));
  };
  return (
    <div className=" w-screen h-20  fixed bg-black bg-opacity-70 shadow-2xl  top-0 flex justify-between items-center px-8 py-2 z-20  ">
      <div className=" ">
        <img src={Logo} alt="logo" className="shadow-2xl h-16" />
      </div>

      {user && (
        <div className="flex items-center gap-1">
          <div className="text-white bg-black bg-opacity-40 p-1  rounded-md shadow-lg capitalize font-semibold">
            {user.displayName}
          </div>
          <div
            onClick={() => {
              setIsShown(!isShown);
            }}
            className="flex items-center relative cursor-pointer"
          >
            <img src={user.photoURL} alt="img" className="w-8 rounded-md " />
            <span className="text-white rounded-full h-6 ">▼</span>
            {isShown && (
              <ul className="text-slate-400 w-28 py-2 absolute right-0 top-10 border border-slate-300 hover:border-gray-600 font-semibold rounded-lg">
                {/* <li className="px-2 p-1 items-center flex hover:text-white">
                <span className="w-5 h-5 inline-block mr-1 rounded-md bg-rose-500 hover:text-white"></span>
                {user.displayName}
              </li> */}
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
  );
};

export default Header;
