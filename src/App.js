import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])
  return (
    <div className="app">
      <Routes>
        {!user ? (<Route path="/*" element={<LoginScreen />} />) : (
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />

          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
