import {recipes} from "./RecipleData";

function Recipe({id, name, ingredients}) {
    return (
        <div key = {id}>
            <h2>{name}</h2>
            <ul>
                {ingredients.map((items) => {
                    return (<li key={items}>{items}</li>)
                })}
            </ul>
        </div>
    );
}

function SimpleRecipe() {
    return (
        <>  
            <br/>
            <h1>Recipes but More Simple</h1>
            {recipes.map( (items) => {
                return (<Recipe key={items.id} {...items}  />)
            })}
        </>
    );
}

export default SimpleRecipe;