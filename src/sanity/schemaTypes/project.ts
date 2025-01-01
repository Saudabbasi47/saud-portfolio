 const project= {
  name: "project",
  title: "Recent Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Name",
      type: "string",
      required: true,
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
    //   max characters length 200 
    validation: (Rule:any) => Rule.max(200).error("Maximum 200 characters allowed."),  

      required: true,
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      description:"Image should be Rectangle to avoid any scaling issues (use canva to edit your images)",
      required: true,
      options: {
        hotspot: true, // Enables cropping and focus adjustment
      },
    },
    {
        name: "link",
      title: "Project Link",
      type: "url",
      required: true,
    },
    {
      name: "tags",
      title: "Tags",
      type: "array", // Allows multiple items
      of: [{ type: "string" }], // Specifies that each item is a string
      options: {
        layout: "tags", // Enables a tag-style input in Sanity Studio
      },
    },
  ],
};
 export default project;