import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import { Menu }  from './components/menu/menu';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <BrowserRouter>
        <Navbar/>
        <div className={styles.App}>
            
            <h2 className={Classnames(styles.logo_font, styles.caption)}>Fast Food Restaurant</h2>
            <h3 className={Classnames(styles.navbar_font, styles.intro)}>
                Welcome to DreamFlare, where fast food dreams come true! Indulge in our mouth
                watering menu filled with delectable delights that will leave you craving for more.
            </h3>
            <button>Order Now</button>
        </div>       
        <Routes>
            <Route path="menu" element={<Menu/>} />
            <Route path="about" element={<Menu/>} />
            <Route path="home" element={<Menu/>} />    
        </Routes>
        </BrowserRouter>)
    }
