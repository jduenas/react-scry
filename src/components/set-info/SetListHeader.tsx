import React from 'react';

const SetListHeader: React.FunctionComponent = () => {
    return (
        <thead>
            <tr>
                <th className="px-4 py-2 text-left uppercase">Name</th>
                <th className="px-4 py-2 text-left uppercase">Cards</th>
                <th className="px-4 py-2 text-left uppercase">Dates</th>
            </tr>
        </thead>
    );
};

export default SetListHeader;
