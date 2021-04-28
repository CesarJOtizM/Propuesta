import styles from '../Assets/Styles/Components/IntroStep.module.scss';

const Component = ({ imageUrl, title, index, current }) => {
  if (index === current) {
    return (
      <div className={styles.IntroStep}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={imageUrl} alt='' />
        </div>
        <div className={styles.title}>
          <p className={styles.text}>{title}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Component;
