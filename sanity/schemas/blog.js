import { MdAssignment } from 'react-icons/md';

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: MdAssignment,
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      description: 'Name of the Blog Post',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'New Release', value: 'New Release' },
          { title: 'News', value: 'News' },
          { title: 'New Artist', value: 'New Artist' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'blogDate',
      title: 'Blog Date',
      type: 'date',
    },
    {
      name: 'post',
      title: 'Blog Post',
      type: 'string',
      description: 'Blog Post',
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
