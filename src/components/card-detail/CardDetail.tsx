import React, { useContext, useCallback } from 'react';
import { ScryCard } from '../../models/scryfall';
import { AppDispatchContext } from '../../contexts/AppProvider';

const CardDetail: React.FunctionComponent<{ card: ScryCard }> = (props) => {
    const dispatcher = useContext(AppDispatchContext);
    const addToFavorite = useCallback(() => {
        console.log(`Adding ${props.card.name} as a favorite`);
        dispatcher({
            type: 'ADD_FAVORITE',
            payload: props.card
        });
    }, []);

    return (
        <>
            <div className="px-3 py-3 w-64 h-auto">
                <div className="border-t-2 border-black border-b-2">
                    <div className="border-r border-l border-b">
                        <div className="border-b py-3 px-5 font-medium" onClick={addToFavorite}>
                            {props.card.name}
                        </div>
                        <div className="border-b py-3 px-5">{props.card.type_line}</div>
                        <div className="py-3 px-5">{props.card.oracle_text}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetail;
