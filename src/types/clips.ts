import { ApiResponse } from './generic';

/**
 * @description Create Clip
 * @see {@link https://dev.twitch.tv/docs/api/reference/#create-clip}
 */
export interface RequestCreateClip {
    broadcaster_id: string;
    has_delay?: boolean;
}
export interface ResponseCreateClip extends ApiResponse<CreateClipItem[]> { }

/**
 * @description Get Clips
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-clips}
 */
export interface RequestGetClips {
    broadcaster_id?: string;
    game_id?: string;
    id?: string;
    after?: string;
    before?: string;
    ended_at?: string;
    first?: number;
    started_at?: string;
}
export interface ResponseGetClips extends ApiResponse<ClipItem[]> { }


export interface CreateClipItem {
    id: string;
    edit_url: string;
}

export interface ClipItem {
    broadcaster_id: string;
    broadcaster_name: string;
    created_at: string;
    created_id: string;
    creator_name: string;
    embed_url: string;
    game_id: string;
    id: string;
    language: string;
    thumbnail_url: string;
    title: string;
    url: string;
    video_id: string;
    view_count: number;
}