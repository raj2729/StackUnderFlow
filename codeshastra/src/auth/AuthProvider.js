import React, {createContext, useState} from 'react';
import StorageManager from '../storage/StorageManager';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isSignedIn,
        setIsSignedIn,
        isLoading,
        setIsLoading,
        signUp: async body => {
          setCurrentUser(body);
          await new Promise(resolve => setTimeout(resolve, 1100));
          setIsSignedIn(true);
        },
        signIn: async (username, password) => {
          setIsLoading(true);
          await new Promise(resolve => setTimeout(resolve, 1100));
          setCurrentUser({
            name: 'Test User',
            email: username,
            password,
            image:
              'https://media.istockphoto.com/photos/construction-worker-picture-id120050079',
            front:
              'https://assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b1f91b195318100f7d27e_aadhar%20card%402x-min.jpg',
            back: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxREXf7AFIeQQ5HKhLtOYOl_tIsg3P4C1zg&usqp=CAU',
          });
          setIsSignedIn(true);
          setIsLoading(false);
        },
        signOut: async () => {
          try {
            await StorageManager.clearStore();
            setIsSignedIn(false);
            setCurrentUser(null);
          } catch (error) {
            console.log('SignOut:' + error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
