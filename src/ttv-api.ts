import * as Services from './services';
import * as Types from './types';

export class TTVAPI {

    constructor(clientId: string, opts?: Types.Options) {
        Services.StateService.clientId = clientId;
        Services.StateService.opts = opts;
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

    getGames(request: Types.RequestGetGames) { return Services.GamesService.getGames(request); }

    checkAutomodStatus() {}

    getBannedEvents() {}

    getBannedUsers() {}

    getModerators() {}

    getModeratorEvents() {}

    getStreams(request: Types.RequestGetStreams) { return Services.StreamsService.getStreams(request); }

    getStreamsMetadata(request: Types.RequestGetStreamsMetadata) { return Services.StreamsService.getStreamsMetadata(request); }

    createStreamMarker(request: Types.RequestCreateStreamMarker) { return Services.StreamsService.createStreamMarker(request); }

    getStreamMarkers(request: Types.RequestGetStreamMarkers) { return Services.StreamsService.getStreamMarkers(request); }

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