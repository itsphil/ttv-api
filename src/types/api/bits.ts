import { ApiResponse, DateRange } from '../generic';

/**
 * @description Get Bits Leaderboard
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-bits-leaderboard}
 */
export interface RequestGetBitsLeaderboard {
    count?: number;
    period?: string;
    started_at?: string;
    user_id?: string;
}
export interface ResponseGetBitsLeaderboard extends ApiResponse<BitsLeaderboardItem[]> {
    date_range: DateRange;
    total: number;
}

/**
 * @description Get Extension Transactions
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-extension-transactions}
 */
export interface RequestGetExtensionTransactions {
    extension_id: string;
    id?: string;
    after?: string;
    first?: number;
}
export interface ResponseGetExtensionTransactions extends ApiResponse<ExtensionTransaction[]> {
    date_range: DateRange;
    total: number;
}


export interface BitsLeaderboardItem {
    user_id: string;
    user_name: string;
    rank: number;
    score: number;
}

export interface ExtensionTransaction {
    id: string;
    timestamp: string;
    broadcaster_id: string;
    broadcaster_name: string;
    user_id: string;
    user_name: string;
    product_type: ExtensionProductType;
    product_data: ExtensionTransactionProductData;
}


export interface ExtensionTransactionProductData {
    domain: string;
    broadcast: boolean;
    expiration: string;
    sku: string;
    cost: {
        amount: number;
        type: ExtensionProductCurrency
    },
    displayName: string;
    inDevelopment: boolean;
}

export enum ExtensionProductCurrency {
    BITS = 'bits'
}

export enum ExtensionProductType {
    BITS_IN_EXTENSION = 'BITS_IN_EXTENSION'
}