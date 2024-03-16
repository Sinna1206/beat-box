const Podcast = ({ season, episode, episodeTitle, isActive, onDoubleClick }) => {
    const PodcastStyle = {
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: isActive ? '#d1e7dd' : '#e9e9e9',
    };

    return (
        <div style={PodcastStyle}>
            <h3>Podcast</h3>
            {episodeTitle && <p>Episode Title: {episodeTitle}</p>}
            {season && <p>Season: {season}</p>}
            {episode && <p>Episode: {episode}</p>}
            
        </div>
    );
};

export default Podcast;
