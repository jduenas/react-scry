import React, { useEffect, useState } from 'react';
import SetItem from './SetItem';
import '../tailwind.generated.css';
import restApi from '../services/rest';
import SetListHeader from './SetListHeader';
import { ScryResponse, ScrySet } from '../models/scryfall';

const Sets = () => {
    const [model, setState] = useState({ sets: [] as ReadonlyArray<ScrySet> });

    useEffect(() => {
        console.log(`Querying axios`);
        const fetchData = async () => {
            try {
                const results = await restApi.get<ScryResponse<ScrySet>>(
                    '/sets'
                );

                const sets = results.data;
                setState({ sets });
            } catch (error) {
                console.log(`Unable to fetch scyfall sets`, error);
            }
        };

        fetchData();
    }, []);

    const setItems = model.sets.map((set) => {
        return (
            <SetItem
                name={set.name}
                count={set.card_count}
                date={set.released_at}
            ></SetItem>
        );
    });

    return (
        <>
            <div className="flex flex-row justify-center flex-row">
                <table className="table-auto w-8/12">
                    <SetListHeader></SetListHeader>
                    <tbody>{setItems}</tbody>
                </table>
            </div>
        </>
    );
};

export default Sets;
