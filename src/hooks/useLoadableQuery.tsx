import useMergeState from './useMergeState';
import { useEffect } from 'react';
import restApi from '../services/rest';

function useLoadableQuery<T>(url: string, params?: any): [T, boolean] {
    const [model, mergeState] = useMergeState({
        isLoading: true
    } as { result: T; isLoading: boolean; error: string });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const body = await restApi.get<any>(url, params);
                const results: T = body as T;
                mergeState({ result: results, isLoading: false });
            } catch (error) {
                console.log(`Unable to fetch data from ${url}`, error);
                mergeState({ isLoading: false });
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [model.result, model.isLoading];
}

export default useLoadableQuery;
