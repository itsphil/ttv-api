import * as https from 'https';

import { LoggerService, StateService } from '.';

export class ConnectionService {
    static send<T>(path: string, method: string, params?: object, body = ''): Promise<T> {
        console.log(path);
        return new Promise((resolve, reject) => {
            const req = https.request({
                hostname: StateService.opts.connection.hostname,
                path: this.generatePath(path, params),
                method,
                headers: Object.assign({
                    'Client-ID': StateService.clientId,
                    'Content-Type': 'application/json'
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

    private static generatePath(path: string, params: object): string {
        console.log(path);
        const basePath = `/helix/${path}`;

        const rtnPath = !params ? basePath : this.generatePathWithParams(basePath, params);
        
        return rtnPath;
    }

    private static generatePathWithParams(path: string, params: object): string {
        let paramsStr = `${path}?`;

        Object.keys(params).forEach((param) => {
            paramsStr += `${param}=${params[param]}&`;
        });

        return paramsStr.substring(0, paramsStr.length - 1);
    }

    private static onData<T>(data: T, resolve): void {
        resolve(data);
    }

    private static onError(err: Error, reject): void {
        reject(err);
    }
}