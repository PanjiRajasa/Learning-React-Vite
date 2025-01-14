import '../newWayOfThinking/newCSS/nested.css'

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

function List() {
    const listItem = people.map( (items, index) => {
        return <li key={index}> {items} </li>
    });

    return <ul>{listItem}</ul>;
}

function RenderList() {
    return (
        <>
            <List/>
        </>
    );
}

export default RenderList;