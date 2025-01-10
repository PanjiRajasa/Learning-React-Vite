function AlertWhenClicked() {
    const displayAlert = (message, sender, event) => {
        alert(`Alert from displayAlert function! your message: ${message}`);
        additionalAlert(sender);
        checkType(event);
    }

    return (
        <>
            <button onClick={(event) => {displayAlert("Usersz.", "Wixm.", event)}}>Click me!</button>
        </>
    )
}

function additionalAlert(sender) {
    confirm("Additional sentence.from: " + sender);
}

function checkType(event) {
    confirm(`The event is: event ${event.type}`);
}

export default AlertWhenClicked;