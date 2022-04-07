function nonce(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getUrl() {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = "http://localhost:3000/webplayer";

  const state = nonce(16);

  localStorage.setItem("spotify_auth_state", state);
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state user-follow-modify user-follow-read user-library-modify user-library-read streaming user-read-playback-position playlist-modify-private playlist-read-collaborative app-remote-control playlist-read-private user-top-read playlist-modify-public user-read-currently-playing user-read-recently-played";

  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(
    client_id
  )}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&state=${encodeURIComponent(state)}`;

  return url;
}

export const url = getUrl();
