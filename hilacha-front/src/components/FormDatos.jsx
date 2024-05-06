import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const FormDatos = () => {
  return (
    <>
      < Header />

        <main>
            
            <div className="contButton">
              <Link to='/' className='button'>Home</Link>
            </div>

            <section className="formDatos">

                <label className="name"> Nombre:
                    <input type="text" name='name' placeholder='Nombre' required/>
                </label>

                <label className="phone"> Teléfono:
                    <input type="tel" name="phone" placeholder="Teléfono" pattern="[0-9]{9}" required/>
                </label>

                <label className="address"> Dirección:
                    <input type="text" className="street" name="street" placeholder="Calle" required/>
                    <input type="number" className="altura" name="altura" placeholder="Altura" required/>
                    <input type="number" className="piso" name="piso" placeholder="Piso"/>
                    <input type="text" className="dpto" name="dpto" placeholder="Dpto"/>
                </label>

                <label className="message"> Mensaje:
                    <textarea name="message" cols="60" rows="2" placeholder="Mensaje"></textarea>
                </label>

                <div className="buttonContinuar">
                  <Link to='/realizarpedido' className="button">Continuar</Link>
                </div>

            </section>

        </main>

      < Footer />
    </>
  )
}

export default FormDatos
