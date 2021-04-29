import React from 'react';
import styles from '../Assets/Styles/Components/Social.module.scss';
// className={styles.}
const Social = () => {
  return (
    <div className={styles.container}>
      <h3>Unete a nuestra comunidad de viajetros</h3>
      <img
        src='https://d21jpge5pu54j7.cloudfront.net/rrss/es-4.jpg'
        alt='Persona'
      />
      <p> ★ ★ ★ ★ ★</p>
      <p>
        Excelente servicio. Tome los traslados desde San Pedro al aeropuerto y
        estuvieron a la hora. También los tours al Valle de la Luna y a Uyuni
        cumplieron con todo lo estipulado en la descripción. En general el
        servicio que ofrecen es muy bueno...
      </p>
      <h5>¡Sìguenos!</h5>
      <div className={styles.social}>
        <i className='fab fa-facebook'></i>
        <i className='fab fa-instagram'></i>
      </div>
    </div>
  );
};

export default Social;
