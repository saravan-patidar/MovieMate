import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const signIn = async (email, password) => {
  const response = {};
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    response.user = credential.user;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export default signIn;
