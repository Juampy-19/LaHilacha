import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EmpanadasSection from './EmpanadasSection';
import PizzasSection from './PizzasSection';

const FormularioDePedido = () => {
  return (
    <>
      < Header />

      <main>
        
        <div className='contButton'>
          <Link to='/' className='button'>Home</Link>
        </div>

        <section>
          < EmpanadasSection />
        </section>

        <section>
          < PizzasSection />
        </section>

      </main>

      < Footer />
    </>
  )
}

export default FormularioDePedido
