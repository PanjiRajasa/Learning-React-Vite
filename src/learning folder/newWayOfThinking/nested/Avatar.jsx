import '../newCSS/nested.css';
import { getImageURL } from './Utils.jsx';

function Avatar({imageData, size}) {
    return (
        <img
            className = "avatar"
            src={getImageURL(imageData)}
            alt={imageData.name}
            height={size}
        />
    )
}

export default Avatar;