import React, { useContext, useEffect } from 'react';
import './App.css';
import Routing from './Router.jsx';
import { DataContext } from './Components/DataProvider/DataProvider.jsx';
import { Type } from './Utility/action.type.js';
import { auth } from './Utility/firebase.js';

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log('User logged in:', authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        console.log('User logged out');
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Cleanup subscription on component unmount
    return () => {
      unsubscribe();
    };
  }, [dispatch]); // Dependency array ensures effect only runs when `dispatch` changes

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
