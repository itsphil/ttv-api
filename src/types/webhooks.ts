import { ApiResponse } from './generic';

/**
 * @description Get Webhook Subscriptions
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-webhook-subscriptions}
 */
export interface RequestGetWebhookSubscriptions {
    after?: string;
    first?: number;
}
export interface ResponseGetWebhookSubscriptions extends ApiResponse<WebhookSubscriptionsItem[]> { }


export interface WebhookSubscriptionsItem {
    callback: string;
    expires_at: string;
    topic: string;
    total: number;
}