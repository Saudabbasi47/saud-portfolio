
const skill= {
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Skill Title",
      type: "string",
      required: true,
      
      // of: [{ type: "reference" }],
    },
    {
      name: "image",
      title: "Skill Image",
      description:"Image should be square to avoid any scaling issues",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
export default skill;