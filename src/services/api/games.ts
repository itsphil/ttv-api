import { ConnectionService } from '../connection';
import * as Types from '../../types';

export class GamesService {
    private static basePath = 'games';

    static getTopGames(clientId: string, request: Types.RequestGetTopGames) {
        return ConnectionService.send<Types.ResponseGetTopGames>(`${this.basePath}/top`, 'GET', clientId);
    }

    static getGames(clientId: string, request: Types.RequestGetGames) {
        // return ConnectionService.send<Types.ResponseGetTopGames>(`${this.basePath}?`, 'GET', clientId);
    }
}