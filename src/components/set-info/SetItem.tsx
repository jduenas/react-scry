import React from 'react';
import '../../tailwind.generated.css';
import { Link } from 'react-router-dom';

export interface SetItemProps {
    name: string;
    count: number;
    date: string;
    id: string;
    iconUri: string;
}

const SetItem: React.FunctionComponent<SetItemProps> = (props) => {
    return (
        <tr>
            <td className="border px-4 py-2">
                <div className="flex align-center items-center">
                    <img
                        src={props.iconUri}
                        alt={props.name}
                        className="w-4 h-4 mr-2"
                    />
                    <Link to={`/set/${props.id}`}>{props.name}</Link>
                </div>
            </td>
            <td className="border px-4 py-2">{props.count}</td>
            <td className="border px-4 py-2">{props.date}</td>
        </tr>
    );
};

export default SetItem;
