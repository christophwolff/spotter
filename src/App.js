import React from 'react';
import { getHashParams } from './helper.js'
import logo from './logo.svg';
import './styles/tailwind.css';
import './App.css';
import config from './config.js'
import ReleasesList from './ReleasesList'


function App() {
  let headers;
  if (window.location.hash.length > 0) {
      const info = getHashParams(window.location.hash)
      headers = {
      headers: {
        'Authorization': 'Bearer ' + info.access_token
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mt-6" alt="logo" />
        {window.location.hash.length > 0 ? (
          <ReleasesList headers={headers}/>
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
      className="App-link"
      href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${config.clientID}&redirect_uri=http://localhost:3001`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Login to Spotify
    </a>
  )
}

export default App;
