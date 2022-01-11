import axios from "axios";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

const useFirebase = () => {
  initializeAuthentication();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google sign in handler
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out handler
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  // observer 
  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, [auth]);



  // upload image to imgBB
  const uploadImage = img => {
    let body = new FormData()
    body.set('key', '7e550a7fc902522e5934b0e3e9a410d8')
    body.append('image', img)

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body
    });
  };

  return {
    user,
    error,
    setError,
    isLoading,
    uploadImage,
    setIsLoading,
    handleLogOut,
    handleGoogleSignIn,
  };
};

export default useFirebase;
