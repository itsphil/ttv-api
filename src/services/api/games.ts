import { ConnectionService } from '..';
import * as Types from '../../types';

export class GamesService {
    private static basePath = 'games';

    static getTopGames(request: Types.RequestGetTopGames) {
        return ConnectionService.send<Types.ResponseGetTopGames>(`${this.basePath}/top`, 'GET', request);
    }

    static getGames(request: Types.RequestGetGames) {
        return ConnectionService.send<Types.ResponseGetTopGames>(`${this.basePath}`, 'GET', request);
    }
}