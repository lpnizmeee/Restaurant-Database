import classNames from 'classnames';
import styles from './booking.module.scss';
import { SpecialButtons } from '../menu/specialButtons';

export interface BookingProps {
    className?: string;
}
export const Booking = ({ className }: BookingProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section className={classNames('book_section', 'layout_padding')}>
                <div className={styles.container}>
                    <div className={styles.heading_container}>
                        <h2>Book A Table</h2>
                    </div>
                    <div className={styles.row}>
                        <div className={classNames('col-md-6')}>
                            <div className={styles.form_container}>
                                <form action="">
                                    <div className={styles.div_1}>
                                        <input
                                            type="text"
                                            className={classNames(
                                                styles['form-control'],
                                                styles.forms_control
                                            )}
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className={styles.div_1}>
                                        <input
                                            type="text"
                                            className={classNames(
                                                'form-control',
                                                styles.forms_control
                                            )}
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className={styles.div_1}>
                                        <input
                                            type="email"
                                            className={classNames(
                                                'form-control',
                                                styles.forms_control
                                            )}
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className={styles.div_1}>
                                        <select
                                            className={classNames(
                                                'form-control',
                                                styles.forms_control,
                                                styles['nice-select'],
                                                styles.select_custom
                                            )}
                                        >
                                            <option value="" disabled selected>
                                                How many persons?
                                            </option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <div className={styles.div_1}>
                                        <input
                                            type="date"
                                            className={classNames(
                                                'form-control',
                                                styles.forms_control
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <button>Book Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
