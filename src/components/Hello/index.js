import { themr } from 'react-css-themr';
import theme from './theme.scss';
import Hello from './Hello';
import { HELLO } from '../../constants/identifiers';

export default themr(HELLO, theme)(Hello);
