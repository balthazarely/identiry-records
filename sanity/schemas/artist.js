import { MdAccountCircle } from 'react-icons/md';

export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: MdAccountCircle,
  fields: [
    {
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      description: 'Name of the Artist',
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
      name: 'bio',
      title: 'Artist Bio',
      type: 'string',
      description: 'Bio of the Artist',
    },
    {
      name: 'featured',
      title: 'Featured Artist',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'artistSpotify',
      title: 'Spotify Link',
      type: 'string',
      description: 'Spotify Link of the Artist',
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
};
