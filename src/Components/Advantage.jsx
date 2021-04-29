import React from 'react';
import styles from '../Assets/Styles/Components/Advantage.module.scss';

const Advantage = ({ imageUrl, title, content }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>
        <img src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Advantage;
