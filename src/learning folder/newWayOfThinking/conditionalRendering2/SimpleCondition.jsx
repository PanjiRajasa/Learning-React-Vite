function SimpleCondition() {
    return (
        <section>
            <h1>Simple ToDos with Conditional</h1>
            <ul>
                <Items
                description="Coding"
                isChecked={true} />
                <Items
                description="Install Ubuntu Linux"
                isChecked={false} />
                <Items
                description="Think about Fenrys 🤩"
                isChecked={true} />
                <Items
                description="Night Sleep"
                isChecked={false} />
            </ul>
        </section>
    );
}

function Items({description, isChecked}) {
    let itemContent = description;
    if(isChecked) {
        itemContent =  (
            <del>
                {description + " ✅"} 
            </del>
        );
    }

    return ( 
        <li>
            {itemContent}
        </li> 
    );
}

export default SimpleCondition;