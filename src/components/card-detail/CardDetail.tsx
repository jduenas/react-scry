import React from 'react';
import { ScryCard } from '../../models/scryfall';

const CardDetail: React.FunctionComponent<{ card: ScryCard }> = (props) => {
    return (
        <div className="px-3 py-3 w-64 h-auto">
            <div className="border-t-2 border-black border-b-2">
                <div className="border-r border-l border-b">
                    <div className="border-b py-3 px-5 font-medium">{props.card.name}</div>
                    <div className="border-b py-3 px-5">{props.card.type_line}</div>
                    <div className="py-3 px-5">{props.card.oracle_text}</div>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
