import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footerAddress'>
          <h1>Av. Gaona 1355</h1>
          <h2>Caballito - CABA</h2>
        </div>

        <div className='payment'>
          <h3>Medios de pago</h3>
          <h3>Efectivo</h3>
          <div className='icon'>
            <FontAwesomeIcon icon={faMoneyBill1Wave} />
          </div>
        </div>

        <div className='footerLegend'>
          <h3>ABIERTO TODAS LAS NOCHES</h3>
          <h3>INCLUSIVE FERIADOS</h3>
        </div>
      </footer>
    </>
  )
}

export default Footer;
