import { ApiResponse, DateRange } from './generic';

/**
 * @description Get Extension Analytics
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-extension-analytics}
 */
export interface RequestGetExtensionAnalytics extends BaseAnalyticsRequest {
    extension_id?: string;
}
export interface ResponseGetExtensionAnalytics extends ApiResponse<AnalyticsExtensionReport> { }

/**
 * @description Get Game Analytics
 * @see {@link hhttps://dev.twitch.tv/docs/api/reference/#get-game-analytics}
 */
export interface RequestGetGameAnalytics extends BaseAnalyticsRequest {
    game_id: string;
}
export interface ResponseGetGameAnalytics extends ApiResponse<AnalyticsGameReport> { }


export interface AnalyticsExtensionReport extends BaseAnalyticsReport {
    extension_id: string;    
}

export interface AnalyticsGameReport extends BaseAnalyticsReport {
    game_id: string;    
}


interface BaseAnalyticsRequest {
    after?: string;
    ended_at?: string;
    first?: number;
    started_at?: string;
    type?: AnalyticsReportTypes;
}

interface BaseAnalyticsReport {
    URL: string;
    type: AnalyticsReportTypes,
    date_range: DateRange
}

export enum AnalyticsReportTypes {
    OVERVIEW_V1 = 'overview_v1',
    OVERVIEW_V2 = 'overview_v2'
}