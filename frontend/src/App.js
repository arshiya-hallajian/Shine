
import './App.css';
// import { useEffect, useState, } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Footer from './components/footer/footer';
import Category from './pages/Category/Category';
 

function App() {

  // let router = useRoutes(routes)

  return (


    <>
      {/* {router} */}
     <Category />
     
      <Footer />
    </>


  );
}

export default App;