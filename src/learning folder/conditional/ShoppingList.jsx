const fruits = [
    {name: "Banana", isFruit: true, id: 1},
    {name: "Basketball", isFruit: false, id: 2},
    {name: "Handphone", isFruit: false, id: 3},
    {name: "Strawberry", isFruit: true, id: 4},
];

function ShoppingList() {
    const listItem = fruits.map( (items) => {
        return (
            <li
            key={items.id}
            style={{
                color: items.isFruit ? "lightcoral" : "darkgreen"
            }}
            >
                {items.name}
            </li>
        )
    });

    return (
        <ul>
            {listItem}
        </ul>
    )
};

export default ShoppingList;