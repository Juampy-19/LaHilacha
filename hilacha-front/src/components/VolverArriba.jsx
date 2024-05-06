import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

const VolverArriba = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Función para controlar el desplazamiento y mostrar u ocultar el botón.
        function handleScroll() {
            const scrolled = document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;

            if (scrolled > windowHeight / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para llevar al usuario al principio de la página.
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button className='scrollToTop' onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                </button>
            )}
        </>
    );
}

export default VolverArriba;
