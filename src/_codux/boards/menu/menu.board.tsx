import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../components/menu/menu';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 1054,
        canvasHeight: 754,
    },
});
