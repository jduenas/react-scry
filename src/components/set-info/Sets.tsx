import SetItem from './SetItem';
import '../../tailwind.generated.css';
import SetListHeader from './SetListHeader';
import useFetchSets from '../../hooks/useFetchSets';
import React from 'react';
import { ScrySet } from '../../models/scryfall';

const Sets = () => {
    const [results, isLoading] = useFetchSets();
    const setDetails = isLoading ? [] : results;
    const setItems = setDetails.map((set: ScrySet) => {
        return (
            <SetItem
                key={set.id}
                id={set.code}
                iconUri={set.icon_svg_uri}
                name={set.name}
                count={set.card_count}
                date={set.released_at}
            ></SetItem>
        );
    });

    return (
        <>
            <div className="flex flex-row justify-center">
                <table className="table-auto w-8/12">
                    <SetListHeader></SetListHeader>
                    <tbody>{setItems}</tbody>
                </table>
            </div>
        </>
    );
};

export default Sets;
