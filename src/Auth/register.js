import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import UserLogo from "../images/avatar.avif";

const signUpForm = async (email, password, name) => {
  let response = {};
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name
    );
    const updateUser = await updateProfile(credential.user, {
      displayName: name,
      photoURL: UserLogo,
    });
    response.user = credential.user;
  } catch (error) {
    console.log(error.code);
    response.error = error;
  }
  return response;
};

export default signUpForm;
