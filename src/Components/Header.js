import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, USER_AVATAR } from "../Utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user.uid;
        console.log(user);
        dispatch(addUser({ uid: uid, name: displayName, email: email }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute  px-28 py-1 w-full bg-gradient-to-b from-black z-40 flex justify-between">
      <img className="w-48" src={LOGO} alt="Logo" />
      <div className="flex p-2">
        <img className="w-12 h-12" src={USER_AVATAR} alt="account" />
        <button type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
