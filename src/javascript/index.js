import ReactDOM from 'react-dom';
import immstruct from 'immstruct';

import App from './app';


let count = 0;
let data = immstruct({ message: `hello world ${count}` });

let el = document.querySelector('#application');
let render = () => ReactDOM.render(App({ message: data.cursor('message') }), el);

render();
data.on('swap', render);

setInterval(() => data.cursor().update('message', () => `hello world ${++count}`), 1000);
