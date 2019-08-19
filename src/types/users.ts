import { ApiResponse } from './generic';

/**
 * @description Get Users
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-users}
 */
export interface RequestGetUsers {
    id?: string;
    login?: string;
}
export interface ResponseGetUsers extends ApiResponse<UsersItem[]> { }

/**
 * @description Get Users Follows
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-users-follows}
 */
export interface RequestGetUsersFollows {
    after?: string;
    first?: number;
    from_id?: string;
    to_id?: string;
}
export interface ResponseGetUsersFollows extends ApiResponse<UsersFollowsItem[]> { }

/**
 * @description Update User
 * @see {@link https://dev.twitch.tv/docs/api/reference/#update-user}
 */
export interface RequestUpdateUser { }
export interface ResponseUpdateUser extends ApiResponse<UsersItem[]> { }

/**
 * @description Get User Extensions
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-user-extensions}
 */
export interface RequestGetUserExtensions { }
export interface ResponseGetUserExtensions extends ApiResponse<UserExtensionsItem[]> { }

/**
 * @description Get User Active Extensions
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-user-active-extensions}
 */
export interface RequestGetUserActiveExtensions { }
export interface ResponseGetUserActiveExtensions extends ApiResponse<UserActiveExtensionsItem[]> { }

/**
 * @description Update User Extensions
 * @see {@link https://dev.twitch.tv/docs/api/reference/#update-user-extensions}
 */
export interface RequestGetUserActiveExtensions { }
export interface ResponseGetUserActiveExtensions extends ApiResponse<UserActiveExtensionsItem[]> { }


export interface UsersItem {
    broadcaster_type: string;
    description: string;
    display_name: string;
    email: string;
    id: string;
    login: string;
    offline_image_url: string;
    profile_image_url: string;
    type: string;
    view_count: number;
}

export interface UsersFollowsItem {
    followed_at: string;
    from_id: string;
    from_name: string;
    to_id: string;
    to_name: string;
    total: number;
}

export interface UserExtensionsItem {
    can_activate: boolean;
    id: string;
    name: string;
    type: string[];
    version: string;
}

export interface UserActiveExtensionsItem {
    component: { [key: string]: UserActiveExtensionsMetaData }
    panel: { [key: string]: UserActiveExtensionsMetaData }
    overlay: { [key: string]: UserActiveExtensionsMetaData }
}

export interface UserActiveExtensionsMetaData {
    active: boolean;
    id: string;
    name: string;
    version: string;
    x?: number;
    y?: number;
}