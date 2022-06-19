import React, { useState } from "react";
import {
  userState,
  loadingState,
  helpRunState,
} from "../../states/AuthGuardState/userState";
import { useRecoilState } from "recoil";
import { fireAuth } from "../../services/firebase";
import { useRouter } from "next/router";
const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useRecoilState(loadingState);

  React.useEffect(() => {
    // console.log(user.name.split(" ",2).join(" ",2))
    const unSubscribe = fireAuth.onAuthStateChanged((person) => {
      console.log(person)
      const infoUser= person && person.displayName.split(' ')  
      if (!person) {
        setUser(null);
        setLoading(false);
        return 0;
      } else 
        setUser({
          name: person.displayName,
          email: person.email,
          uid: person.uid,
          profile: person.photoURL,
          role:infoUser[infoUser.length-1]
        });
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoute;
