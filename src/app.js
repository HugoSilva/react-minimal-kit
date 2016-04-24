import { render } from 'react-dom'
import routes from './routes';
require('./index.html');

render(routes, document.getElementById('app'))