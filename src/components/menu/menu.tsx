import classNames from 'classnames';
import styles from './menu.module.scss';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span>Hamberger</span>
            <span>text</span>
            <span>text</span>
            <span>text</span>Menu
        </div>
    );
};
