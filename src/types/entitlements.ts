import { ApiResponse } from './generic';

/**
 * @description Create Entitlement Grants Upload URL
 * @see {@link https://dev.twitch.tv/docs/api/reference/#create-entitlement-grants-upload-url}
 */
export interface RequestCreateEntitlementGrantsURL {
    manifest_id: string;
    type: 'bulk_drops_grants';
}
export interface ResponseCreateEntitlementGrantsURL extends ApiResponse<EntitlementGrantsURLItem[]> { }

/**
 * @description Get Code Status
 * @see {@link https://dev.twitch.tv/docs/api/reference/#get-code-status}
 */
export interface RequestGetCodeStatus {
    code: string;
    user_id: number;
}
export interface ResponseGetCodeStatus extends ApiResponse<EntitlementCodeStatusItem[]> { }

/**
 * @description Redeem Code
 * @see {@link https://dev.twitch.tv/docs/api/reference/#redeem-code}
 */
export interface RequestRedeemCode {
    code: string;
    user_id: number;
}
export interface ResponseRedeemCode extends ApiResponse<EntitlementCodeStatusItem[]> { }


export interface EntitlementGrantsURLItem {
    url: string;
}

export interface EntitlementCodeStatusItem {
    code: string;
    status: EntitlementCodeStatus;
}

export enum EntitlementCodeStatus {
    SUCCESSFULLY_REDEEMED = 'SUCCESSFULLY_REDEEMED',
    ALREADY_CLAIMED = 'ALREADY_CLAIMED',
    EXPIRED = 'EXPIRED',
    USER_NOT_ELIGIBLE = 'USER_NOT_ELIGIBLE',
    NOT_FOUND = 'NOT_FOUND',
    INACTIVE = 'INACTIVE',
    UNUSED = 'UNUSED',
    INCORRECT_FORMAT = 'INCORRECT_FORMAT',
    INTERNAL_ERROR = 'INTERNAL_ERROR'
}