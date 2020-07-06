import React, { useReducer } from 'react';
import AppContext, { AppState } from './AppContext';
import { ScryCard } from '../models/scryfall';

export type AppAction = 'ADD_FAVORITE' | 'REMOVE_FAVORITE';
export interface DispatchType<T, K> {
    type: AppAction;
    payload: T;
}

export interface CardPayload {
    card: ScryCard;
}

export interface SetPayload {}

const appReducer = (state: AppState, action: DispatchType<CardPayload | SetPayload, AppAction>) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            const a = { ...state, favorites: [...state.favorites, action.payload] } as AppState;
            return a;
        default:
            return state;
    }
    return state;
};

const defaultDispatcher: React.Dispatch<DispatchType<CardPayload | SetPayload, AppAction>> = (payload) =>
    console.error(`Dispatcher not implemented`);

export const AppDispatchContext = React.createContext(defaultDispatcher);

const AppProvider: React.FunctionComponent = (props) => {
    const [state, dispatch] = useReducer(appReducer, { isAuthenticated: false, favorites: [] });

    return (
        <AppContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>{props.children}</AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export default AppProvider;
