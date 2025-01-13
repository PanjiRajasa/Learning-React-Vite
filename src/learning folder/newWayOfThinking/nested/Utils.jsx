export function getImageURL(data, size = "s") {
    return (
        'https://i.imgur.com/' + data.id + size + '.jpg'
    );
}