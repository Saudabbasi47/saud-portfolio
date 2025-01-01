const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "jobtitle",
      title: "Job Title",
      type: "string",
      required: true,
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      required: true,
    },
    {
      name: "paragraphone",
      title: "First Paragraph",
      type: "text",
      required: true,
      validation: (Rule: any) =>
        Rule.max(300).error("Maximum 300 characters allowed."),
    },
    {
      name: "paragraphtwo",
      title: "Second Paragraph",
      type: "text",
    },
    {
      name: "frontendskill",
      title: "Frontend Skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "backendskill",
      title: "Backend Skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "experience",
      title: "Experiences",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "position", title: "Position", type: "string" },
            { name: "company", title: "Company", type: "string" },
            { name: "durationfrom", title: "Duration From", type: "date" },
            { name: "durationto", title: "Duration To", type: "date" },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
      options: {
        layout: "cards",
      },
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "institute", title: "Institute", type: "string" },
            { name: "field", title: "field", type: "string" },
            { name: "durationfrom", title: "Duration From", type: "date" },
            { name: "durationto", title: "Duration To", type: "date" },
            { name: "keypoints", title: "Key Points", type: "string" },
          ],
        },
      ],
      options: {
        layout: "cards",
      },
    },
  ],
};
export default about;
