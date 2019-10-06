import * as https from 'https';

import { LoggerService, StateService } from '.';

export class ConnectionService {
    static send<T>(path: string, method: string, body: string = ''): Promise<T> {
        return new Promise((resolve, reject) => {
            const req = https.request({
                hostname: StateService.opts.connection.hostname,
                path: this.generatePath(path),
                method,
                headers: Object.assign({
                    'Client-ID': StateService.clientId
                }, StateService.opts.connection.headers)
            }, (res) => {
                res.on('data', (data: T) => {
                    if(StateService.opts.logging) LoggerService.logJSON(JSON.parse(data.toString()));

                    this.onData<T>(data, resolve);
                });
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