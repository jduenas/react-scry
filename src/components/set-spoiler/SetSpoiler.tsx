import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchSetSpoilers from '../../hooks/useFetchSetSpoiler';
import CardDetail from '../card-detail/CardDetail';

const SetSpoiler: React.FunctionComponent = (props) => {
    const { setId } = useParams();
    const [model, isLoading] = useFetchSetSpoilers(setId);

    if (isLoading) {
        return <>Loading Card...</>;
    }

    const cards = model.map((card) => {
        return <CardDetail key={card.id} card={card}></CardDetail>;
    });

    return (
        <div className="w-full flex flex-row justify-center">
            <div className="w-3/4 flex flex-row justify-center flex-wrap">{cards}</div>
        </div>
    );
};

export default SetSpoiler;
