import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import VolverArriba from './VolverArriba';
import PizzasSection from './PizzasSection';

const Pizzas = () => {
  return (
    <>
      < Header />

      <main>

        <div className='contButton'>
          <Link to='/' className='button'>Home</Link>
          <Link to='/empanadas' className='button'>Empanadas</Link>
          <Link to='/formdatos' className='button'>Pedí</Link>
        </div>

        < PizzasSection />
        
        <div className='buttonToTop'>
          < VolverArriba />   
        </div>

      </main>

      < Footer />
    </>
  )
}

export default Pizzas;
