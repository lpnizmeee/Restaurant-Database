import React from 'react';
import classNames from 'classnames';
import styles from './menu.module.scss';
import ReactDOM from 'react-dom';
import ItemDiv_module from './itemDiv.module.scss';

export interface ItemProps {
    itemDiv?: string;
    itemDiscription?: string;
    className?: string;
}

export const Item = ({ itemDiv }: ItemProps) => {
    return (
        <div
            className={classNames(
                'col-sm-6',
                'col-lg-4',
                'all',
                'pizza',
                ItemDiv_module.food_item_flexbox
            )}
            style={{
                position: 'relative',
                left: '0px',
                top: '0px',
                display: 'block',
                padding: '0%',
                maxWidth: '20%',
                margin: '0%',
                
            }}
        >
            <div className={styles.box}>
                <div>
                    <div className={styles.img_box}>
                        <img src="/assets/images/f1.png" alt="" />
                    </div>
                    <div className={styles.detail_box}>
                        <h5 className={styles.food_name}>{itemDiv}</h5>
                        <p className={styles.food_description}>
                            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                            magnam voluptatem repellendus sed eaque"
                        </p>
                        <div className={classNames(styles.options, styles.buy_div)}>
                            <h6 className={styles.food_price}>$20</h6>
                            <a href="">
                                <div className={styles.shop_cart_button}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 576 512"
                                        className={styles.svg_style}
                                    >
                                        <style>{`svg { fill: #eede2f; }`}</style>
                                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
