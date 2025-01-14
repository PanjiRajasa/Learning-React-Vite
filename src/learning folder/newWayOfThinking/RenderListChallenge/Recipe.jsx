import {recipes} from "./RecipleData";
import {Fragment} from 'react';

function IterateData() {
    return (
        <div>
            {recipes.map((items) => {
                    return (
                        <div key={items.id}>
                            <h2 key={items.id}>{items.name}</h2>
                            <ul>
                                {items.ingredients.map( (data) => 
                                    <li key={data}>{data}</li>
                                )}
                            </ul>
                        </div>
                    );
                }
            )}
        </div>
    );
}

function DisplayRecipe() {
    return (
        <Fragment>
            <h1>Recipes</h1>
            <IterateData/>
        </Fragment>);
}

function Recipe() {
    return (
        <DisplayRecipe />
    );
}

export default Recipe;