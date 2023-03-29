
import './App.css';
import { useEffect, useState, } from 'react';
import { useRoutes } from 'react-router-dom';
import Header from "./components/header/header";
import routes from './routes';
import Login from './pages/login-signup/Login';


function App() {

  let router = useRoutes(routes)

  return (

   
    <>
    <Header/>
      {router}

   </>


  );
}

export default App;