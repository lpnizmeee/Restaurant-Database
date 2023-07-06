import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';
import { Menu } from './components/menu/menu';
import { Navbar } from './components/navbar/navbar';
import { Booking } from './components/booking/booking';
import { About } from './components/about/about';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className={styles.Component}>
                            <div className={styles.App}>
                                <h2 className={Classnames(styles.logo_font, styles.caption)}>
                                    Fast Food Restaurant
                                </h2>
                                <h3 className={Classnames(styles.navbar_font, styles.intro)}>
                                    Welcome to DreamFlare, where fast food dreams come true! Indulge
                                    in our mouth watering menu filled with delectable delights that
                                    will leave you craving for more.
                                </h3>
                                <button>Order Now</button>
                            </div>
                            <Menu />
                            <Booking />
                            <About />
                        </div>
                    }
                />

                <Route path="menu" element={<Menu />} />
                <Route path="about" element={<About />} />
                <Route path="booking" element={<Booking />} />
            </Routes>
        </BrowserRouter>
    );
}
