import '../newWayOfThinking/newCSS/filter.css'
import { people } from './filterList/data';
import { getURL } from './filterList/utils';

function DisplayData() {
    const filteredData = people.filter( (items) => items.profession === 'chemist');

    const list = filteredData.map((items) => {
        return (
                <li key={items.id} className='filter-ul'>
                    <img 
                        className="filteredIMG" 
                        src={getURL(items)}
                        alt={items.name}
                    />
                    <p>
                        <b>{items.name}:</b>
                        {' ' + items.profession + ' ' }
                        known for {items.accomplishment}
                    </p>
                </li>
        );
    });

    return <ul className="filter-ul">{list}</ul>;
};

function AllData() {
    const allData = people.map( (items) => {
        return ( 
            <li key={items.id} className="filter-ul">
                <img 
                    className='filteredIMG'
                    src={getURL(items)}
                    alt={items.name}
                />
                <p>
                    <b>{items.name}:</b>
                    {' ' + items.profession + ' '}
                    known for {items.accomplishment}
                </p>
            </li>
        )
    });

    return <ul className="filter-ul">{allData}</ul>
}

function FilteredList() {
    return (
        <>       
            <DisplayData/>
            <h2>All scientists: </h2>
            <AllData/>
        </>
    );
}

export default FilteredList;