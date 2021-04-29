import React from 'react';
import styles from '../Assets/Styles/Components/Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.corp}>
          <p>Empresa</p>
          <ul>
            <li> ¿Quienes somos?</li>
            <li>Sustentabilidad</li>
            <li>Alianza LATAM pass</li>
            <li>Programa de afiliados</li>
            <li>Trabaja con nosotros</li>
            <li>Contactanos</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.corp}>
          <p>Soporte</p>
          <ul>
            <li> Preguntas frecuentes</li>
            <li>Solicitar cotización</li>
            <li>Regala una gif card</li>
            <li>Viajes para empresa</li>
            <li>Sugerencias y reclamos</li>
            <li>Terminos y condiciones</li>
            <li>Politica de privacidad</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.end}>
        <br />
        <p>
          Av. Alonso de Córdova 5670, Las Condes, Santiago de Chile. |
          reservas@denomades.com
        </p>
        <br />
        <p>
          Denomades® forma parte de PBM Turismo, especialistas en venta online
          de servicios turísticos.
        </p>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
