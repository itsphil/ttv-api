import { ConnectionService } from '..';
import * as Types from '../../types';

export class StreamsService {
    private static basePath = 'streams';

    static getStreams(request: Types.RequestGetStreams) {
        return ConnectionService.send<Types.ResponseGetStreams>(`${this.basePath}`, 'GET', request);
    }

    static getStreamsMetadata(request: Types.RequestGetStreamsMetadata) {
        return ConnectionService.send<Types.ResponseGetStreamsMetadata>(`${this.basePath}/metadata`, 'GET', request);
    }

    static getStreamMarkers(request: Types.RequestGetStreamMarkers) {
        return ConnectionService.send<Types.ResponseGetStreamMarkers>(`${this.basePath}/markers`, 'GET', request);
    }

    static createStreamMarker(request: Types.RequestCreateStreamMarker) {
        return ConnectionService.send<Types.ResponseCreateStreamMarker>(`${this.basePath}/markers`, 'POST', null, JSON.stringify(request));
    }
}