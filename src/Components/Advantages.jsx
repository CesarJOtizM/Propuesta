import React from 'react';
import Advantage from './Advantage';
import Badges from './Badges';
import styles from '../Assets/Styles/Components/Advantages.module.scss';

const data = [
  {
    title: 'Un viaje sin imprevistos',
    content:
      'Trabajamos con los mejores proveedores locales de la región para asegurarnos de que tu próximo viaje sea una experiencia segura, personalizada y excepcional.',
    imageUrl: 'https://d21jpge5pu54j7.cloudfront.net/others/usp-1.svg',
  },
  {
    title: 'No pagarás de más',
    content:
      'Nuestros precios no son mayores a los que encontrarás en destino. No cobramos cargos por gestión y contamos con política de anulación gratuita para todas nuestras actividades.',
    imageUrl: 'https://d21jpge5pu54j7.cloudfront.net/others/usp-2.svg',
  },
  {
    title: 'Atención inmediata',
    content:
      'Te acompañamos antes, durante y después de tu viaje para atender de manera inmediata todas tus dudas y requerimientos, en tu idioma y a través del canal de atención que tú prefieras.',
    imageUrl: 'https://d21jpge5pu54j7.cloudfront.net/others/usp-3.svg',
  },
];

const badge = [
  {
    title: 'Distincion de turismo sustentable',
    imageUrl: 'https://d21jpge5pu54j7.cloudfront.net/others/sello-s.png',
  },
  {
    title: 'Responsible tourism',
    imageUrl:
      'https://d21jpge5pu54j7.cloudfront.net/others/wtm-responsible-tourism.png',
  },
  {
    title: 'All are welcome',
    imageUrl:
      'https://d21jpge5pu54j7.cloudfront.net/others/all-are-welcome.png',
  },
  {
    title: 'Comodo secure',
    imageUrl: 'https://d21jpge5pu54j7.cloudfront.net/others/comodo.png',
  },
  {
    title: 'LATAM pass',
    imageUrl: 'https://d21jpge5pu54j7.cloudfront.net/logos/latam-logo.svg',
  },
];
const Advantages = () => {
  return (
    <>
      <div>
        <h3 className={styles.title}>
          ¿Por que reservar en{' '}
          <span>
            <img
              src='https://d21jpge5pu54j7.cloudfront.net/logos/logo-negro.svg'
              alt='Logo'
            />
          </span>
          ?
        </h3>
        {data.map((adavatage, index) => (
          <Advantage
            index={index}
            key={index}
            imageUrl={adavatage.imageUrl}
            title={adavatage.title}
            content={adavatage.content}
          />
        ))}
      </div>
      <div className={styles.container}>
        {badge.map((badge, index) => (
          <Badges
            key={index}
            index={index}
            badge={badge.imageUrl}
            title={badge.title}
          />
        ))}
      </div>
    </>
  );
};

export default Advantages;
