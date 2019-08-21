import { Options } from "../types";

class StateServiceInstance {
    clientId: string;
    
    private _opts: Options = {
        connection: {
            hostname: 'api.twitch.tv',
            headers: {}
        }
    };
    get opts(): Options { return this._opts; }
    set opts(opts: Options) {
        if(opts) this._opts = Object.assign(opts, this._opts);
    }
}

export const StateService = new StateServiceInstance();