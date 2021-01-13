import React from 'react';

export default function MusicPlayer({ spotifyURL, height }) {
  return (
    <>
      <iframe
        title="Spotify"
        src={`https://open.spotify.com/embed/album/${spotifyURL}`}
        width="100%"
        height={height}
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </>
  );
}
