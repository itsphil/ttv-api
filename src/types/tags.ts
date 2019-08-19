import { ApiResponse } from './generic';

/**
 * @description Get All Stream Tags
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-all-stream-tags}
 */
export interface RequestGetAllStreamTags {
    after?: string;
    first?: number;
    tag_id?: string;
}
export interface ResponseGetAllStreamTags extends ApiResponse<StreamTagsItem[]> { }

/**
 * @description Get Stream Tags
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-stream-tags}
 */
export interface RequestGetStreamTags {
    broadcaster_id: string;
}
export interface ResponseGetStreamTags extends ApiResponse<StreamTagsItem[]> { }

/**
 * @description Replace Stream Tags
 * @see {@link https://dev.twitch.tv/docs/api/reference/#replace-stream-tags}
 */
export interface RequestReplaceStreamTags {
    broadcaster_id: string;
    tag_ids?: string[];
}
export interface ResponseReplaceStreamTags extends ApiResponse<StreamTagsItem[]> { }


export interface StreamTagsItem {
    tag_id: string;
    is_auto: boolean;
    localization_names: { [key: string]: string }
    localization_descriptions: { [key: string]: string }
}