import { ApiResponse } from '../generic';

/**
 * @description Get Top Games
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-top-games}
 */
export interface RequestGetTopGames {
    after?: string;
    before?: string;
    first?: number;
}
export interface ResponseGetTopGames extends ApiResponse<GameItem[]> { }

/**
 * @description Get Games
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-games}
 */
export interface RequestGetGames {
    id?: string;
    name?: string;
}
export interface ResponseGetGames extends ApiResponse<GameItem[]> { }


export interface GameItem {
    box_art_url: string;
    id: string;
    name: string;
}