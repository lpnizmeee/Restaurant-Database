import { createBoard } from '@wixc3/react-board';
import { About } from '../../../components/about/about';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    environmentProps: {
        canvasWidth: 1064,
        canvasHeight: 716,
    },
});
