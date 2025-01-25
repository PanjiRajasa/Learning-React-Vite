import { useState } from "react";

let newId = 4;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
    { id: 3, title: 'X Gunner', seen: true },
  ];

export default function UpdateObjectInsideArray() {
    const [list, setList] = useState(initialList);
    const [secondList, setSecondList] = useState(initialList);

    function handleToggleFirstList(id, isSeen) {
        setList(list.map(a => {
            if(a.id === id) {
                return {...a, seen: isSeen};
            } else {
                return a;
            }
        }));
    }

    function handleToggleSecondList(id, isSeen) {
        setSecondList(secondList.map(b => {
            if(b.id === id) {
                return {...b, seen: isSeen}
            } else {
                return b;
            }
        }));
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                art={list}
                onToggle={handleToggleFirstList}
            />

            <h2>Your list of art to see:</h2>
            <ItemList
                art={secondList}
                onToggle={handleToggleSecondList}
            />
        </>
    );

    function ItemList({art, onToggle}) {
        return (
            <ul>
                {art.map(artwork => {
                    return (
                        <li key={artwork.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={artwork.seen}
                                    onChange={e => {
                                        onToggle(
                                            artwork.id,
                                            e.target.checked
                                        );
                                    }}
                                />
                                {artwork.title}
                            </label>
                        </li>
                    );
                })}
            </ul>
        );
        
    }
}