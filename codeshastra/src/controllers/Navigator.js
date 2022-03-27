import React, {useContext} from 'react';
import {AuthContext} from '../auth/AuthProvider';
import MainTabScreen from './MainTabScreen';
import RootStackScreen from './RootStackScreen';

const Navigator = () => {
  const {isSignedIn} = useContext(AuthContext);
  return isSignedIn ? <MainTabScreen /> : <RootStackScreen />;
};

export default Navigator;
