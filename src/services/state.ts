import { Options } from "../types";

class StateServiceInstance {
    clientId: string;
    
    private _opts: Options = {
        connection: {
            hostname: 'api.twitch.tv',
            headers: {}
        },
        logging: true
    };
    get opts(): Options { return this._opts; }
    set opts(opts: Options) {
        if(opts) {
            this._opts = opts;

            this.validateOpts(opts);
        }
    }
    private validateOpts(opts: Options): void {
        if((!opts) || (!opts.connection) || !opts.connection.hostname) {
            throw new Error('invalid options');
        }
    }
}

export const StateService = new StateServiceInstance();