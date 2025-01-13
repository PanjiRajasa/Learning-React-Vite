import './newCSS/starting.css';

const scientist = {
    name: 'Gregorio Y. Zara',
    src: 'https://i.imgur.com/7vQD0fPs.jpg',
    alt:'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    },
    todos: ['Improve the videophone', 'Prepare aeronautics lectures', 'Work on the alcohol-fuelled engine']
};

function GetStarted2() {
    return (
        <div style={scientist.theme} className="getStartedC">
            <h1>{scientist.name} Todos</h1>
            <img className="avatar" src={scientist.src} alt={scientist.alt} />
            <ul>
                <li>{scientist.todos[0]}</li>
                <li>{scientist.todos[1]}</li>
                <li>{scientist.todos[2]}</li>
            </ul>
        </div>
    )
};

export default GetStarted2;