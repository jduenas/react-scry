import React from 'react';
import '../tailwind.generated.css';

export interface SetItemProps {
    name: string;
    count: number;
    date: string;
}

const SetItem: React.FunctionComponent<SetItemProps> = (props) => {
    return (
        <tr>
            <td className="border px-4 py-2">{props.name}</td>
            <td className="border px-4 py-2">{props.count}</td>
            <td className="border px-4 py-2">{props.date}</td>
        </tr>
    );
};

export default SetItem;
