import React from 'react';
import { ScryCard } from '../models/scryfall';
export interface AppState {
    isAuthenticated: boolean;
    favorites: ScryCard[];
}

const AppContext = React.createContext({} as AppState);
export default AppContext;
