import { Outlet } from 'react-router-dom'
import styles from './App.module.css';


import Title from './Title';
import Footer from './Footer';

function App() {
    return (
        <div className={styles.App}>
            <Title />
            <main className={styles.Content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
