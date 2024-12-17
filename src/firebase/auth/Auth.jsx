import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { app, googleAuthProvider } from "../firebase";
import { useEffect, useState } from "react";

const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (maybeUser) => {
      if (maybeUser) {
        setUser(maybeUser);
      } else {
        signInWithPopup(auth, googleAuthProvider)
          .then((credentials) => setUser(credentials.user))
          .catch((error) => console.error("Sign-in error:", error));
      }
    });

    return () => unSub();
  }, []);

  return user ? (
    <div>
      <p>Hello, {user.displayName}!</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default AuthProvider;

