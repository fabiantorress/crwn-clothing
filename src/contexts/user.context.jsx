import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null, //The empty state of an object should be null because you want a null check wheter or not you have a user existing object
  setCurrentUser: () => null, // A function that does nothing, it returns null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  ); //We just render the children
};
