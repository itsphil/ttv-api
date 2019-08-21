import { ApiResponse } from '../generic';

/**
 * @description Check AutoMod Status
 * @see {@link https://dev.twitch.tv/docs/api/reference/#check-automod-status}
 */
export interface RequestCheckAutoModStatus {
    broadcaster_id: string;
    msg_id: number;
    msg_text: string;
    user_id: string;
}
export interface ResponseCheckAutoModStatus extends ApiResponse<AutoModStatusItem[]> { }

/**
 * @description Get Banned Events
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-banned-events}
 */
export interface RequestGetBannedEvents {
    broadcaster_id: string;
    user_id?: string;
    after?: string;
    first?: string;
}
export interface ResponseGetBannedEvents extends ApiResponse<BannedEventsItem[]> { }

/**
 * @description Get Banned Users
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-banned-users}
 */
export interface RequestGetBannedUsers {
    broadcaster_id: string;
    user_id?: string;
    after?: string;
}
export interface ResponseGetBannedUsers extends ApiResponse<BannedUsersItem[]> { }

/**
 * @description Get Moderators
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-moderators}
 */
export interface RequestGetModerators {
    broadcaster_id: string;
    user_id?: string;
    after?: string;
}
export interface ResponseGetModerators extends ApiResponse<ModeratorsItem[]> { }

/**
 * @description Get Moderator Events
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-moderator-events}
 */
export interface RequestGetModeratorEvents {
    broadcaster_id: string;
    user_id?: string;
}
export interface ResponseGetModeratorEvents extends ApiResponse<ModeratorEventsItem[]> { }


export interface AutoModStatusItem {
    msg_id: string;
    is_permitted: boolean;
}

export interface BannedEventsItem {
    id: string;
    event_type: string;
    event_timestamp: string;
    version: string;
    event_data: BannedEventData;
}

export interface BannedEventData {
    broadcaster_id: string;
    broadcaster_name: string;
    user_id: string;
    user_name: string;
    expires_at: string;
}

export interface BannedUsersItem {
    user_id: string;
    user_name: string;
    expires_at: string;
}

export interface ModeratorsItem {
    user_id: string;
    user_name: string;
}

export interface ModeratorEventsItem {
    id: string;
    event_type: string;
    event_timestamp: string;
    version: string;
}
