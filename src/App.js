import React from 'react';
import logo from './logo.svg';
import './styles/tailwind.css';
import './App.css';
import config from './config.js'
import ReleasesList from './ReleasesList'

let baseUrl = 'https://quirky-mahavira-1f6e67.netlify.com'
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000'
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mt-6" alt="logo" />
        <h1 className="font-semibold text-xl tracking-tight mt-3 text-white">Spotify's New Releases</h1>
        {window.location.hash.length > 0 ? (
          <ReleasesList />
      ) : (
        <LoginButton />
      )}
      </header>
    </div>
  );
}

function LoginButton(props) {
  return (
    <a
      className="Spotify-button text-gray-300 font-bold py-2 px-4 mt-6"
      href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${config.clientID}&redirect_uri=${baseUrl}`}
    >
      Login with Spotify.
    </a>
  )
}

export default App;
