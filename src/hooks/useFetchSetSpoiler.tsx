import { ScryCard, ScryCardListResponse } from '../models/scryfall';
import useLoadableQuery from './useLoadableQuery';

function useFetchSetSpoilers(setId: string): [ScryCard[], boolean] {
    const [results, isLoading] = useLoadableQuery<ScryCardListResponse<ScryCard>>('/cards/search', {
        order: 'set',
        q: `e:${setId}`,
        unique: 'prints'
    });

    if (isLoading) {
        return [[], isLoading];
    }

    return [results.data, isLoading];
}

export default useFetchSetSpoilers;
