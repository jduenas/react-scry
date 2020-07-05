import { useState, useCallback } from 'react';

// Use State doesn't merge the state when calling setState.  This assists with that so that partial states can be merged.
// Use callback prevent too many callback from being created as rendered is called
function useMergeState<T>(
    initialState: T
): [T, (newState: Partial<T>) => void] {
    const [state, setState] = useState(initialState);

    const mergeState = useCallback((newState: Partial<T>) => {
        setState((currentState: T) => ({ ...currentState, ...newState } as T));
    }, []);

    return [state, mergeState];
}

export default useMergeState;
