import { useEffect } from 'react';
import { ScrySet, ScryResponse } from '../models/scryfall';
import useLoadableQuery from './useLoadableQuery';

function useFetchSets(): [ScrySet[], boolean] {
    const [results, isLoading] = useLoadableQuery<ScryResponse<ScrySet>>('/sets');
    if (isLoading) {
        return [[], isLoading];
    }

    return [results.data, isLoading];
}

export default useFetchSets;
