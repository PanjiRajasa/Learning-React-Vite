import '../newCSS/nested.css';
import Avatar from './Avatar';

function MiniCard() {
    return (
    <Card>
        <Avatar
            size={100}
            imageData={{
                name: "Katsuko Saruhashi",
                id: "YfeOqp2"
            }}
        />
    </Card>
    )
}

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default MiniCard;