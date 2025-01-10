function ConditionalRender() {
    let content;
    let statusCon = true;

    if (statusCon) {
        content = (
            <h2>Hi h2</h2>
        )
    } else {
        content = (
            <h3>Hi h3</h3>
        )
    }

    return (
        <div>
            {statusCon ? 
            (
                <h2>Hi h2</h2>
            ) : (
                <h3>Hi h3</h3>
            )}
            {content}

            {statusCon && <h1>Single hi h1!</h1>}
        </div>
    )
}

export default ConditionalRender;