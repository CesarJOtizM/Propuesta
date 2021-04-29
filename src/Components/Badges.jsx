import React from 'react';
import styles from '../Assets/Styles/Components/Badges.module.scss';
const Badges = ({ badge, title, index }) => {
  return (
    <div className={styles.container} id={index}>
      <img src={badge} alt={title} />
    </div>
  );
};

export default Badges;
