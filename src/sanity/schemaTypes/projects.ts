const projects= {
  name: "projects",
  title: "All Projects",
  type: "document",
  fields: [
    {
      //image
      name: "image",
      title: "Project Image",
      type: "image",
      description: "Image should be Rectangle to avoid any scaling issues",
      required: true,
      options: { hotspot: true },
    },
    {
      name: "title",
      title: "Project Title",
      type: "string",
      required: true,
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
      required: true,
    },
    {
      //keyfeatures
      name: "highlights",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      required: true,
    },
    {
      //tags
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      required: true,
    },
    {
      //link
      name: "github",
      title: "Github Link",
      type: "url",
      required: true,
    },
    {
      name: "link",
      title: "Website Link",
      type: "url",
      required: true,
    },
  ],
};
export default projects;