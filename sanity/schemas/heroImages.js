import { AiFillStar } from 'react-icons/md';

export default {
  name: 'covers',
  title: 'Covers',
  type: 'document',
  icon: AiFillStar,
  fields: [
    {
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      description: 'Name of the Artist',
    },
    {
      name: 'release',
      title: 'Release Name',
      type: 'string',
      description: 'Name of the Release',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'release',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'description',
      type: 'string',
      description: 'Description of release',
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
