import { TTVAPI } from './index';

const api = new TTVAPI('izq7if97y4h49kd5wd3g7vhsjga0r5');

api.getGames({ id: '2748' }).then((res) => {
    console.log('OK');
}).catch((err) => {
    console.log('ERROR', err);
});