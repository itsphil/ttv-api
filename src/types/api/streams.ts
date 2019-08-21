import { ApiResponse } from '../generic';

/**
 * @description Get Streams
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-streams}
 */
export interface RequestGetStreams {
    after?: string;
    before?: string;
    community_id?: string;
    first?: number;
    game_id?: string;
    language?: string;
    user_id?: string;
    user_login?: string;
}
export interface ResponseGetStreams extends ApiResponse<StreamsItem[]> { }

/**
 * @description Get Streams Metadata
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-streams-metadata}
 */
export interface RequestGetStreamsMetadata {
    after?: string;
    before?: string;
    community_id?: string;
    first?: number;
    game_id?: string;
    language?: string;
    user_id?: string;
    user_login?: string;
}
export interface ResponseGetStreamsMetadata extends ApiResponse<StreamsMetadataItem[]> { }

/**
 * @description Create Stream Marker
 * @see {@link https://dev.twitch.tv/docs/api/reference/#create-stream-marker}
 */
export interface RequestCreateStreamMarker {
    user_id: string;
    description?: string;
}
export interface ResponseCreateStreamMarker extends ApiResponse<StreamMarkerItem[]> { }

/**
 * @description Get Stream Markers
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-stream-markers}
 */
export interface RequestGetStreamMarkers {
    user_id?: string;
    video_id?: string;
    after?: string;
    before?: string;
    first?: string;
}
export interface ResponseGetStreamMarkers extends ApiResponse<StreamMarkerFullItem[]> { }


export interface StreamsItem {
    community_ids: string[];
    game_id: string;
    id: string;
    language: string;
    started_at: string;
    tag_ids: string;
    thumbnail_url: string;
    title: string;
    type: string;
    user_id: string;
    user_name: string;
    viewer_count: number;
}

export interface StreamsMetadataItem {
    user_id: string;
    user_name: string;
    game_id: string;
    overwatch: StreamsMetadataGameData;
    hearthstone: StreamsMetadataGameData;
}

export interface StreamsMetadataGameData {
    broadcaster: {
        hero: {
            role: string;
            name: string;
            ability: string;
        }
    }
}

export interface StreamMarkerItem {
    created_at: string;
    description: string;
    id: string;
    position_seconds: number;
}

export interface StreamMarkerFullItem extends StreamMarkerItem {
    URL: string;
    user_id: string;
    user_name: string;
    video_id: string;
}