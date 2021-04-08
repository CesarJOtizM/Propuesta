import '../assets/styles/App.scss';
import { Router } from '@reach/router';
import Home from '../views/Home';

import Header from './Header';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Home path='/' />
      </Router>
    </>
  );
};

export default App;
