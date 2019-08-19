import { ApiResponse } from './generic';

/**
 * @description Get Videos
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-videos}
 */
export interface RequestGetVideos {
    id: string;
    user_id: string;
    game_id: string;
    after?: string;
    before?: string;
    first?: number;
    language?: string;
    period?: string;
    sort?: string;
    type?: string;
}
export interface ResponseGetVideos extends ApiResponse<VideoItem[]> { }


export interface VideoItem {
    created_at: string;
    description: string;
    duration: string;
    id: string;
    language: string;
    published_at: string;
    thumbnail_url: string;
    title: string;
    type: string;
    url: string;
    user_id: string;
    user_name: string;
    view_count: number;
    viewable: string;
}