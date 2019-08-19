import { TTVAPI } from './index';

const api = new TTVAPI('izq7if97y4h49kd5wd3g7vhsjga0r5');

api.getTopGames({}).then((res) => {
    console.log('OK', res.toString());
}).catch((err) => {
    console.log('ERROR', err);
});