import { MdAlbum } from 'react-icons/md';
import artist from './artist';

export default {
  name: 'albums',
  title: 'Albums',
  type: 'document',
  icon: MdAlbum,
  fields: [
    {
      name: 'name',
      title: 'Album Name',
      type: 'string',
      description: 'Name of the Album',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'artist',
      title: 'Artists on Album',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'artist' } }],
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'genre' } }],
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    },
    {
      name: 'tracks',
      title: 'Tracks on Album',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'spotifyURI',
      title: 'Spotify URI',
      type: 'string',
      description: 'Spotify album URI',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      artist0: 'artist.0.name',
      artist1: 'artist.1.name',
      artist2: 'artist.2.name',
      artist3: 'artist.3.name',
    },
    prepare: ({ title, media, ...artist }) => {
      // 1. FIlter undefined toppings out
      const filteredArtists = Object.values(artist).filter(Boolean);

      return {
        title,
        media,
        subtitle: Object.values(filteredArtists).join(', '),
      };
    },
  },
};
