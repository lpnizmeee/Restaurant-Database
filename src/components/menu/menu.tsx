import react from 'react';
import classNames from 'classnames';
import styles from './menu.module.scss';
import { SpecialButtons } from './specialButtons';
export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <>
            <div className={classNames(styles.root, className)}>
                <div>
                    <h2 className={styles.ourMenu_font}>Our Menu</h2>
                </div>

                <div className={styles.list_menu}>
                    <SpecialButtons category="All"/>
                    <SpecialButtons category="Burger"/>
                    <SpecialButtons category="Pizza"/>
                    <SpecialButtons category="Pasta"/>
                    <SpecialButtons category="Fries"/>
                </div>

            </div>
        </>
    );
};
