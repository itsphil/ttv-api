import * as Services from './services';
import * as Types from './types';

export class TTVAPI {

    constructor(clientId: string) {
        Services.StateService.clientId = clientId;
    }

    getExtensionAnalytics() {}

    getGameAnalytics() {}

    getBitsLeaderboard() {}

    getExtensionTransactions() {}

    createClip() {}

    getClips() {}

    createEntitlementGrantsUploadURL() {}

    getCodeStatus() {}

    redeemCode() {}

    getTopGames(request: Types.RequestGetTopGames) { return Services.GamesService.getTopGames(request); }

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