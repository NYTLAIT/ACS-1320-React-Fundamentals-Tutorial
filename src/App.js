import { Outlet } from 'react-router-dom'
// import styles from './App.module.css';


import Title from './Title';
import Footer from './Footer';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Title />
      <main className='flex flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
