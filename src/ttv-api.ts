import * as Services from './services';
import * as Types from './types';

export class TTVAPI {

    constructor(private clientId: string) {}

    getExtensionAnalytics() {}

    getGameAnalytics() {}

    getBitsLeaderboard() {}

    getExtensionTransactions() {}

    createClip() {}

    getClips() {}

    createEntitlementGrantsUploadURL() {}

    getCodeStatus() {}

    redeemCode() {}

    getTopGames(request: Types.RequestGetTopGames) { return Services.GamesService.getTopGames(this.clientId, request); }

    getGames() {}

    checkAutomodStatus() {}

    getBannedEvents() {}

    getBannedUsers() {}

    getModerators() {}

    getModeratorEvents() {}

    getStreams() {}

    getStreamsMetadata() {}

    createStreamMarker() {}

    getStreamMarkers() {}

    getBroadcasterSubscriptions() {}

    getBroadcasterSubscribers() {}

    getSubscriptionEvents() {}

    getAllStreamTags() {}

    getStreamTags() {}

    replaceStreamTags() {}

    getUsers() {}

    getUsersFollows() {}

    updateUser() {}

    getUserExtensions() {}

    getUserActiveExtensions() {}

    updateUserExtensions() {}

    getVideos() {}

    getWebhookSubscriptions() {}

}