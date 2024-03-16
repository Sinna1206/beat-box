import wallpaper from './wallpaper.png';
import './App.css';
import'./Style.css';
import './index.css';
import Playlist from './Playlist';

function App() {
  return (
    <div className="App" 
        style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <div className="content">
        <h1>BEATS</h1>
          <Playlist />
      </div>
    </div>
  );
}

export default App;
