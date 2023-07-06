import classNames from 'classnames';
import styles from './about.module.scss';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section className={classNames(styles.about_section, styles.layout_padding)}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.col_md_6}>
                            <div className={styles.img_box}>
                                <img
                                    src="assets/images/about-img.png"
                                    alt=""
                                    className={styles.about_img}
                                />
                            </div>
                        </div>
                        <div className={styles.col_md_6}>
                            <div className={styles.detail_box}>
                                <div className={styles.heading_container}>
                                    <h2 className={styles.weAD}>We are DreamFlare</h2>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don't look even
                                    slightly believable. If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn't anything embarrassing
                                    hidden in the middle of text. All
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
