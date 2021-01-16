import { MusicNoteIcon } from 'react-icons/md';

export default {
  name: 'genre',
  title: 'Genre',
  type: 'document',
  icon: MusicNoteIcon,
  fields: [
    {
      name: 'name',
      title: 'Genre Name',
      type: 'string',
      description: 'Genre',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 30,
      },
    },
  ],
};
