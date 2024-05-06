import React, { useEffect, useState } from 'react';

const ListadoPizzas = ({ listadoPizzas }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!listadoPizzas || listadoPizzas.length === 0);
  }, [listadoPizzas]);
  console.log('listadoPizzas en ListadoPizzas',listadoPizzas);
  console.log('loading en ListadoPizzas', loading);

  return (
    <>
      <ul>
        {loading ? (
        //?Loader
        <div class="box">
          <div class="pizza-slice slice-1">
            <div class="border">
              <div class="crust"></div>
              <div class="cheese">
                <div class="peperoni p-1"></div>
                <div class="peperoni p-2"></div>
                <div class="peperoni p-3"></div>
                <div class="olive o-1"></div>
                <div class="olive o-3"></div>
                <div class="olive o-4"></div>
                <div class="olive o-6"></div>
                <div class="olive o-7"></div>
              </div>
            </div>
          </div>
          <div class="pizza-slice slice-2">
            <div class="border">
              <div class="crust"></div>
              <div class="cheese">
                <div class="peperoni p-1"></div>
                <div class="peperoni p-2"></div>
                <div class="peperoni p-3"></div>
                <div class="olive o-1"></div>
                <div class="olive o-2"></div>
                <div class="olive o-3"></div>
                <div class="olive o-6"></div>
                <div class="olive o-7"></div>
              </div>
            </div>
          </div>
          <div class="pizza-slice slice-3">
            <div class="border">
              <div class="crust"></div>
              <div class="cheese">
                <div class="peperoni p-1"></div>
                <div class="peperoni p-2"></div>
                <div class="peperoni p-3"></div>
                <div class="olive o-3"></div>
                <div class="olive o-4"></div>
                <div class="olive o-5"></div>
                <div class="olive o-6"></div>
              </div>
            </div>
          </div>
          <div class="pizza-slice slice-4">
            <div class="border">
              <div class="crust"></div>
              <div class="cheese">
                <div class="peperoni p-1"></div>
                <div class="peperoni p-2"></div>
                <div class="peperoni p-3"></div>
                <div class="olive o-1"></div>
                <div class="olive o-2"></div>
                <div class="olive o-3"></div>
                <div class="olive o-4"></div>
              </div>
            </div>
          </div>
          <div class="pizza-slice slice-5">
            <div class="border">
              <div class="crust"></div>
              <div class="cheese">
                <div class="peperoni p-1"></div>
                <div class="peperoni p-2"></div>
                <div class="peperoni p-3"></div>
                <div class="olive o-1"></div>
                <div class="olive o-2"></div>
                <div class="olive o-6"></div>
                <div class="olive o-7"> </div>
              </div>
            </div>
          </div>
        </div>
        //?Loader
        ) : (
          listadoPizzas.map((pizza) => (
            <li key={pizza.id}>
              {pizza.sabor}
            </li>
          ))
        )}
      </ul>
    </>
  )
}

export default ListadoPizzas;
