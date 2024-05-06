import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import VolverArriba from './VolverArriba';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import EmpanadasSection from './EmpanadasSection';

const Empanadas = () => {
  return (
    <>
        < Header />
        
        <main>

          <div className='burgerMenu'>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className='contButton'>
            <Link to='/' className='button'>Home</Link>
            <Link to='/pizzas' className='button'>Pizzas</Link>
            <Link to='/formdatos' className='button'>Pedí</Link>
          </div>

          < EmpanadasSection />

          <div className='buttonToTop'>
            < VolverArriba />
          </div>

        </main>

        < Footer />
    </>
  )
}

export default Empanadas;
