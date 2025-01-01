

 const contact= {
    name:"contact",
    title:"Contact ",
    type:"document",
    fields:[{
        name:"title",
        title:"Contact Title",
        type:"string",
        required:true,
    },{
        name:"headline",
        title:"Headline",
        type:"text",
        required:true,
        // Validation:(Rule:any)=>Rule.max(200).error("Maximum length 200 Characters")
    },{
        name:"email",
        title:"Email Address",
        type:"string",
        required:true,
    },
    {
        name:"phone",
        title:"Phone Number",
        type:"string",
        required:true,
    },
    {
        name:"location",
        title:"Location",
        type:"string",
        required:true,
    }
]
}
export default contact