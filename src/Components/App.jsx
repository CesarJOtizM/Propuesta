import Header from './Header';
import styles from '../Assets/Styles/Components/App.module.scss';
import Outstanding from './Outstanding';
import Chile from './Chile';
import Peru from './Peru';
import Social from './Social';
import Advantages from './Advantages';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outstanding />
        <Chile />
        <Peru />
        <Social />
        <Advantages />
      </main>
      <Footer />
    </>
  );
};

export default App;
