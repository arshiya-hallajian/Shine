
import './App.css';
import {useEffect,useState,}from 'react';
import { useRoutes } from 'react-router-dom';
import Header from "./components/header/header";
import routes from './routes';
import PageNotFound from './pages/404';

function App() {

let router =useRoutes(routes)

  return (
   
    <div>
<PageNotFound />
   </div>
  );
}

export default App;


{/* <Header/><br /><br /><br />
{router} */}