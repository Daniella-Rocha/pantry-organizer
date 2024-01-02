import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import styles from './App.module.css';

import { CategoryProvider } from './contexts/categoryContext';

function App() {

  return (
    <div className={styles.app}>
        <CategoryProvider>
          <NavBar />
          <Outlet />
          <Footer />
        </CategoryProvider>
    </div>
  )
}

export default App;
