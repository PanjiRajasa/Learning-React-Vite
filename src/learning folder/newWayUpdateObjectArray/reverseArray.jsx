import { useState } from "react";

const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
  ];

export default function ReversingArray() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const reversed = [...list];
        reversed.reverse();
        setList(reversed);
    }

    return (
        <>
            <button onClick={handleClick}>
                Reverse these array's items
            </button>
            <ul>
                {list.map(x => <li key={x.id}>{x.title}</li>)}
            </ul>
        </>
    )
}