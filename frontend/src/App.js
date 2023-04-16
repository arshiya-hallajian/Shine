
import './App.css';
import { useEffect, useState, } from 'react';
import { useRoutes } from 'react-router-dom';
import Header from "./components/header/header";
import routes from './routes';
import Footer from './components/footer/footer';


function App() {

  let router = useRoutes(routes)

  return (


    <>
      <Header />
      {router}
      <Footer />
    </>


  );
}

export default App;