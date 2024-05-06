import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import VolverArriba from "./VolverArriba";

const Home = () => {
  return (
    <>
      < Header />

      <main>
          
        <div className='contButton'>
          <Link to='/pizzas' className='button'>Pizzas</Link>
          <Link to='/empanadas' className='button'>Empanadas</Link>
          <Link to='/formdatos' className='button'>Pedí</Link>
        </div>

        <div className="buttonToTop">
          < VolverArriba />
        </div>

      </main>

      < Footer />
    </>
  )
}

export default Home;