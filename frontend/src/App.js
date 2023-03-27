
import './App.css';
import { useEffect, useState, } from 'react';
import { useRoutes } from 'react-router-dom';
import Header from "./components/header/header";
import routes from './routes';



function App() {

  let router = useRoutes(routes)

  return (

    <div>
      <Header /><br /><br /><br />
      {router}

    </div>
  );
}

export default App;





