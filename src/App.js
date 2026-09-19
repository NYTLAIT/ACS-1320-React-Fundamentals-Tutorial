import { Outlet } from 'react-router-dom'
import './App.css';


import Title from './Title';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Title />
            <Outlet className='content' />
            <Footer />
        </div>
    );
}

export default App;
