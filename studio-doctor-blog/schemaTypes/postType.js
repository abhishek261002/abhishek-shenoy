import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      initialValue: 'Abhishek Rajput', 
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      type: 'string',
      description: 'e.g., Deep Dive, Tactics, or AEO',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})