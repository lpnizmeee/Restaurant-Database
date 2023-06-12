import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <nav className={styles.navbar_layout}>
                <a href="/home" className={styles.logo_font}>
                    DreamFlare
                </a>
                <div className={styles.navbar_item}>
                    <a href="/home" className={styles.navbar_font}>
                        HOME |{' '}
                    </a>
                    <a href="/menu" className={styles.navbar_font}>
                        MENU |{' '}
                    </a>
                    <a href="/about" className={styles.navbar_font}>
                        ABOUT |{' '}
                    </a>
                    <a href="/about" className={styles.navbar_font}>
                        BOOK TABLE
                    </a>
                </div>
            </nav>
            <h2 className={styles.logo_font}>Fast Food Restaurant</h2>
            <h3 className={Classnames(styles.navbar_font, styles.intro)}>
                Welcome to DreamFlare, where fast food dreams come true! Indulge in ourmouthwatering
                menu filled with delectable delights that will leave you craving formore.
            </h3>
            <button>Order Now</button>
        </div>
    );
}

export default App;
