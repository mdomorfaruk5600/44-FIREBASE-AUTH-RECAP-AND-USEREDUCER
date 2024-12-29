import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/book/:bedType' element={
          <RequireAuth>
            <Book />
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
