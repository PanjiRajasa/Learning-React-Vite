import './newCSS/starting.css';
function SimpleStarting() {
    return (
        <>
            <Images title="Amazing scientists"/>
        </>
    );
}

function Images({title}) {
    const imageData = ["https://i.imgur.com/MK3eW3As.jpg", "Katherine Johnson"];

    function RepeatImages() {
        const container = [];
        for(let i = 0; i < 5; i++) {
           container.push(
            <img key={i} src={imageData[0]} alt={imageData[0]} />
           );
        }

        return <>{container}</>;
    }

    return (
        <>
            <h1>{title}</h1>
            <div className="horizontalFlex">
                <RepeatImages/>
            </div>
        </>
    )
    
}

export default SimpleStarting;