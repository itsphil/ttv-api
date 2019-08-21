import * as https from 'https';

import { StateService } from '.';

export class ConnectionService {
    static send<T>(path: string, method: string, body: string = ''): Promise<T> {
        console.log(path, method, body, StateService.clientId);
        return new Promise((resolve, reject) => {
            const req = https.request({
                hostname: 'api.twitch.tv',
                path: this.generatePath(path),
                method,
                headers: {
                    'Client-ID': StateService.clientId
                }
            }, (res) => {
                console.log('WHAT');
                res.on('data', (d: T) => this.onData<T>(d, resolve));
            });

            req.on('error', (err) => this.onError(err, reject));

            req.write(body);
            req.end();
        });
    }

    private static generatePath(path: string): string {
        return `/helix/${path}`;
    }

    private static onData<T>(data: T, resolve): void {
        resolve(data);
    }

    private static onError(err: Error, reject): void {
        reject(err);
    }
}