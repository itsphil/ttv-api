import { ApiResponse } from './generic';

/**
 * @description Get Broadcaster Subscriptions
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions}
 */
export interface RequestGetBroadcasterSubscriptions {
    broadcaster_id: string;
}
export interface ResponseGetBroadcasterSubscriptions extends ApiResponse<SubscriptionsItem[]> { }

/**
 * @description Get Broadcaster Subscribers
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-broadcaster-s-subscribers}
 */
export interface RequestGetBroadcasterSubscribers {
    broadcaster_id: string;
    user_id: string;
}
export interface ResponseGetBroadcasterSubscribers extends ApiResponse<SubscriptionsItem[]> { }

/**
 * @description Get Subscription Events
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-subscription-events}
 */
export interface RequestGetSubscriptionEvents {
    broadcaster_id: string;
    id: string;
    user_id?: string;
    after?: string;
    first?: number;
}
export interface ResponseGetSubscriptionEvents extends ApiResponse<SubscriptionEventsItem[]> { }


export interface SubscriptionsItem {
    broadcaster_id: string;
    broadcaster_name: string;
    is_gift: boolean;
    tier: string;
    plan_name: string;
    user_id: string;
    user_name: string;
}

export interface SubscriptionEventsItem {
    id: string;
    event_type: string;
    event_timestamp: string;
    version: string;
    event_data: SubscriptionEventData;
}

interface SubscriptionEventData {
    broadcaster_id: string;
    broadcaster_name: string;
    is_gift: boolean;
    plan_name: string;
    tier: string;
    user_id: string;
    user_name: string;
    message: string;
}