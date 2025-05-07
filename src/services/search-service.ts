import { searchUri } from '../constants/api-uris';
import { HttpService } from './http-service';

abstract class SearchService {
    static async searchLocation({latitude, longitude, query}: {latitude?: number, longitude?: number, query: string}) {
        return await HttpService.post({
            uri: searchUri,
            body: {
                latitude: latitude,
                longitude: longitude,
                query: query,
            }
        });
    }
}

export {
    SearchService
}