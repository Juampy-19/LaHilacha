import React, { useEffect, useState } from 'react';
import ListadoPizzas from './ListadoPizzas';

const PizzasSection = () => {

  const [listadoPizzas, setListadoPizzas] = useState([]);
  const [pizzasEternas, setPizzasEternas] = useState([]);
  const [pizzasClasicas, setPizzasClasicas] = useState([]);
  const [pizzasTradicionales, setPizzasTradicionales] = useState([]);
  const [pizzasEspeciales, setPizzasEspeciales] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => {
        const pizzas = data.data
          .filter(item => item.tipo_producto === 'pizza')
          .flatMap(item => item.Pizza);

        //& Filtrado de pizzas por categoría.
        const eternas = pizzas.filter(pizza => pizza.categoria_id === 1);
        const clasicas = pizzas.filter(pizza => pizza.categoria_id === 2);
        const tradicionales = pizzas.filter(pizza => pizza.categoria_id === 3);
        const especiales = pizzas.filter(pizza => pizza.categoria_id === 4);

        //& Guardade de pizzas filtradas en variable de estado.
        setListadoPizzas(pizzas);
        setPizzasEternas(eternas);
        setPizzasClasicas(clasicas);
        setPizzasTradicionales(tradicionales);
        setPizzasEspeciales(especiales);        
      })
      .catch(error => {
        console.log('Error al obtener listado de pizzas');
      });
  }, []);

  return (
    <>      
        <div className='pizzas'>
          <section className='pizzasEternas'>
            <h2>Pizzas Eternas</h2>
            < ListadoPizzas listadoPizzas={ pizzasEternas } />
          </section><br />

          <section className='pizzasClasicas'>
            <h2>Pizzas Clásicas</h2>
            < ListadoPizzas listadoPizzas={ pizzasClasicas }  />
          </section><br />

          <section className='pizzasTradicionales'>
            <h2>Pizzas Tradicionales</h2>
            < ListadoPizzas listadoPizzas={ pizzasTradicionales } />
          </section><br />

          <section className='pizzasEspeciales'>
            <h2>Pizzas Especiales</h2>
            < ListadoPizzas listadoPizzas={ pizzasEspeciales } />
          </section><br />
        </div>
    </>
  )
}

export default PizzasSection;
