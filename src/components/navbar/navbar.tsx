import classNames from 'classnames';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={styles.navbar_layout}>
            <a href="/" className={classNames(styles.logo_font, styles.logo_position)}>
                DreamFlare
            </a>
            <div className={styles.navbar_item}>
                <Link to="/" className={classNames(styles.navbar_font, styles.navbar_item_space)}>
                    HOME
                </Link>
                <Link
                    to="/menu"
                    className={classNames(styles.navbar_font, styles.navbar_item_space)}
                >
                    MENU
                </Link>
                <Link
                    to="/about"
                    className={classNames(styles.navbar_font, styles.navbar_item_space)}
                >
                    ABOUT
                </Link>
                <Link
                    to="/booking"
                    className={classNames(styles.navbar_font, styles.navbar_item_space)}
                >
                    BOOK TABLE
                </Link>
            </div>
        </nav>
    );
};
