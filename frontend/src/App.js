
import './App.css';
import { useEffect, useState, } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Footer from './components/footer/footer';


function App() {

  let router = useRoutes(routes)

  return (


    <>

      {router}
      <Footer />
    </>


  );
}

export default App;