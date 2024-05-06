import React, { useEffect, useState } from 'react';
import ListadoEmpanadas from './ListadoEmpanadas';
import VolverArriba from './VolverArriba';

const EmpanadasSection = () => {

  const [listadoEmpanadas, setListadoEmpanadas] = useState([]);
  const [empanadasTradicionales, setEmpanadasTradicionales] = useState([]);
  const [empanadasCanastitas, setEmpanadasCanastitas] = useState([]);
  const [empanadasPremium, setEmpanadasPremium] = useState([]);
  const [preciosEmpanadas, setPreciosEmpanadas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => {
        const empanadas = data.data
          .filter(item => item.tipo_producto === 'empanada')
          .flatMap(item => item.Empanada);

        //& Obtener precios de empanadas por categoría.
        const precios = {};
        data.data.forEach(item => {
          if (item.tipo_producto === 'precio_empanada') {
            precios[item.categoria_id] = item.precio;
          }
        });

        setPreciosEmpanadas(precios);

        //& Filtrado de empanadas por categoría.
        const tradicionales = empanadas.filter(empanada => empanada.categoria_empanada_id === 1);
        const canastitas = empanadas.filter(empanada => empanada.categoria_empanada_id === 2);
        const premium = empanadas.filter(empanada => empanada.categoria_empanada_id === 3);

        //& Guardado de empanadas filtradas en variables de estado.
        setListadoEmpanadas(empanadas);
        setEmpanadasTradicionales(tradicionales);
        setEmpanadasCanastitas(canastitas);
        setEmpanadasPremium(premium);
      })
      .catch(error => {
        console.log('Error al obtenes listado de empanadas:', error);
      });
  }, []);

  return (
    <>        
        <div className='empanadas'>
            <section className='empTradicionales'>
              <h2>Empanadas tradicionales</h2>
              <div className='listEmp'>
                < ListadoEmpanadas listadoEmpanadas={ empanadasTradicionales } />
              </div>
            </section><br />

            <section className='empCanastitas'>
              <h2>Empanadas abiertas tipo canastitas</h2>
              <div className='listEmp'>
                < ListadoEmpanadas listadoEmpanadas={ empanadasCanastitas } />
              </div>
            </section><br />

            <section className='empPremium'>
              <h2>Empanadas premium</h2>
              <div className='listEmp'>
                < ListadoEmpanadas listadoEmpanadas={ empanadasPremium } />
              </div>
            </section><br />
        </div>

        <div className='buttonToTop'>
          < VolverArriba />
        </div>

    </>
  )
}

export default EmpanadasSection;
