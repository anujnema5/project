import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Content= defineDocumentType(() => ({
  name: 'Content',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/content/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: './src/data/content',
  documentTypes: [Content],
})