import { createBoard } from '@wixc3/react-board';
import { Booking } from '../../../components/booking/booking';

export default createBoard({
    name: 'Booking',
    Board: () => <Booking />,
    environmentProps: {
        canvasWidth: 1044,
        canvasHeight: 716,
    },
});
