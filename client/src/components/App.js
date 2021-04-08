import '../assets/styles/App.scss';
import { Router } from '@reach/router';
import Home from '../views/Home';
import Detail from '../views/Detail';

import Header from './Header';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Home path='/' />
        <Detail path='/prodcuts/:id' />
      </Router>
    </>
  );
};

export default App;
