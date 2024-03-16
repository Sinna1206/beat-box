const Song = ({ title, artist, year, genre, isActive}) => {
    if (!title) {
        return null; // Or render some fallback UI if desired
    }
    const currentYear = new Date().getFullYear();
    const displayYear = year >= 1860 && year <= currentYear ? year : null;
    const SongStyle = {
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: isActive ? '#e9ecef' : '#f9f9f9',
    };

    return (
        <div style={SongStyle}>
            <h3>Song</h3>
            {title && <p>Title: {title}</p>}
            {artist && <p>Artist: {artist}</p>}
            {displayYear && <p>Year: {displayYear}</p>}
            {genre && <p>Genre: {genre} </p>}
        </div>
    );
};

export default Song;
