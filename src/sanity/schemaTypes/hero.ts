const Hero = {
  name: "hero", // Use a simple, lowercase name
  title: "Hero", // User-friendly title for Studio
  type: "document", // This makes it a document type
  fields: [
    {
      name: "profile_picture",
      title: "Profile Picture",
      description: "Image should be Sqaure to avoid any problems",
      type: "image", // For the hero background image
      options: {
        hotspot: true, // Enables cropping and focus adjustment
      },
    },

    {
      name: "fullName",
      title: "Name",
      type: "string", // For the Name heading of the hero section
    },
    {
      name: "jobtitle",
      title: "Job Title",
      type: "string", // For the main heading of the hero section
    },
    {
      name: "paragraph",
      title: "About Paragraph",
      type: "text", // For a short description
    },
    {
      name: "aboutdp",
      title: "About Detailed Paragraph",
      type: "text", // For a short description
    },
    {
      name: "aboutdps",
      title: "About Detailed Paragraph 2",
      type: "text", // For a short description
    },
  ],
};

export default Hero;
