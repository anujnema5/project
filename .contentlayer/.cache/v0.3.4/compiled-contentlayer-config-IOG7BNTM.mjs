// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Content = defineDocumentType(() => ({
  name: "Content",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/content/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/data/content",
  documentTypes: [Content]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IOG7BNTM.mjs.map
