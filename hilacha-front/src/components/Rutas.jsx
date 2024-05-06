import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Pizzas from './Pizzas';
import Empanadas from './Empanadas';
import FormDatos from './FormDatos';
import FormularioDePedido from './FormularioDePedido';

const Rutas = () => {
  return (
    <Routes>
      
        <Route path='/' exact element={ < Home /> } />
        <Route path='/pizzas' exact element={ < Pizzas /> } />
        <Route path='/empanadas' exact element={ < Empanadas /> } />
        <Route path='/formdatos' exact element={ < FormDatos /> } />
        <Route path='/realizarpedido' exact element={ < FormularioDePedido /> } />

        <Route path='/*' element= { <Navigate to='/' /> } /> {/* Ruta de redirección */}

    </Routes>
  )
}

export default Rutas;
