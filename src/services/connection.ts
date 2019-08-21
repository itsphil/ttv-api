import * as https from 'https';

export class ConnectionService {
    static send<T>(path: string, method: string, clientId: string, body: string = ''): Promise<T> {
        return new Promise((resolve, reject) => {
            const req = https.request({
                hostname: 'api.twitch.tv',
                path: this.generatePath(path),
                method,
                headers: {
                    'Client-ID': clientId
                }
            }, (res) => {
                res.on('data', (d: T) => this.onData<T>(d, resolve));
            });

            req.on('error', (err) => this.onError(err));

            req.write(body);
            req.end();
        });
    }

    private static generatePath(path: string): string {
        return `/helix/${path}`;
    }

    private static onData<T>(data: T, resolve): void { }

    private static onError(err: Error): void { }
}