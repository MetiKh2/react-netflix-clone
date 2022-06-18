import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Nav } from "./components";
import {
  HomeScreen,
  ProfileScreen,
  SignUpScreen,
  WelcomeScreen,
} from "./pages";
import { auth } from "./firebase";
import { useDispatch ,useSelector} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout, selectUser } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email,
          }))  
      } else {
        dispatch(logout())
      }
    });
  }, []);
  return (
    <>
      <Nav />
      {!user && <WelcomeScreen />}
      {user && (
        <Routes className="App">
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      )}
    </>
  );
}

export default App;
