
import './App.css';
import { useEffect, useState, } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Footer from './components/footer/footer';

// import ProductPage from './pages/ProductPage/ProductPage';
// import ContactUs from './pages/Contact-Us/ContactUs';

function App() {

  let router = useRoutes(routes)

  return (


    <>
      {router}
      {/* <ProductPage /> */}
      {/* <ContactUs /> */}
     
      <Footer />
    </>


  );
}

export default App;