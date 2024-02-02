//DUMMY DATA

function generateColor(){
    let hexcodes = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexcodes[Math.floor(Math.random() * 16)]
    }
    return color;
}

const timeline =[
{
    id:1,
    name: "AliBaba464",
    handle:"@baba464",
    message: "We are dedicated to addressing the common problem of potholes on our roads. Potholes not only damage vehicles but also pose a safety hazard for pedestrians.",
    color:  generateColor()
},
{
    id:2,
    name: "AliBaba262",
    handle:"@baba262",
    message: "Our website provides a simple and effective solution for reporting potholes 11",
    color:  generateColor()
},

{
    id:3,
    name: "AliBaba363",
    handle:"@baba363",
    message: "Our website provides a simple and effective solution for reporting potholes",
    color:  generateColor()
},
{
    id:1,
    name: "AliBaba464",
    handle:"@baba464",
    message: "Our website provides a simple and effective solution for reporting potholes",
     color:  generateColor(),
},
{
    id:2,
    name: "AliBaba262",
    handle:"@baba262",
    message: "Our website provides a simple and effective solution for reporting potholes",
    color:  generateColor()
},

{
    id:3,
    name: "AliBaba363",
    handle:"@baba363",
    message: "Our website provides a simple and effective solution for reporting potholes",
     color:  generateColor()
},
{
    id:1,
    name: "AliBaba464",
    handle:"@baba464",
    message: "Our website provides a simple and effective solution for reporting potholes",
    color:  generateColor()
},
{
    id:2,
    name: "AliBaba262",
    handle:"@baba262",
    message: "Our website provides a simple and effective solution for reporting potholes",
    color:  generateColor()
},

{
    id:3,
    name: "AliBaba363",
    handle:"@baba363",
    message: "Our website provides a simple and effective solution for reporting potholes",
    color:  generateColor()
},
  
]


const reviews =[
    {
        id:1,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolor enim ullam fugit labore ipsa. Aliquam nam cupiditate eos nostrum ex ipsam sit pariatur soluta eveniet quam, animi vel omnis.",
        name: "Adam Waxman",
        career:"Designer vx",
        imgSrc: "https://i.ibb.co/tBS3Zxn/ives.jpg"

    },
    {
        id:2,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolor enim ullam fugit labore ipsa. Aliquam nam cupiditate eos nostrum ex ipsam sit pariatur soluta eveniet quam, animi vel omnis.",
        name: "Adam Waxman",
        career:"Designer vx",
        imgSrc: "https://i.ibb.co/tBS3Zxn/ives.jpg"

    },
    {
        id:3,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolor enim ullam fugit labore ipsa. Aliquam nam cupiditate eos nostrum ex ipsam sit pariatur soluta eveniet quam, animi vel omnis.",
        name: "Adam Waxman",
        career:"Designer vx",
        imgSrc: "https://i.ibb.co/tBS3Zxn/ives.jpg"

    },
    {
        id:4,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolor enim ullam fugit labore ipsa. Aliquam nam cupiditate eos nostrum ex ipsam sit pariatur soluta eveniet quam, animi vel omnis.",
        name: "Adam Waxman",
        career:"Designer vx",
        imgSrc: "https://i.ibb.co/tBS3Zxn/ives.jpg"

    },
    {
        
        id:5,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolor enim ullam fugit labore ipsa. Aliquam nam cupiditate eos nostrum ex ipsam sit pariatur soluta eveniet quam, animi vel omnis.",
        name: "Adam Waxman",
        career:"Designer vx",
        imgSrc: "https://i.ibb.co/tBS3Zxn/ives.jpg"

    },
    {
        id:6,
        message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolor enim ullam fugit labore ipsa. Aliquam nam cupiditate eos nostrum ex ipsam sit pariatur soluta eveniet quam, animi vel omnis.",
        name: "Adam Waxman",
        career:"Designer vx",
        imgSrc: "https://i.ibb.co/tBS3Zxn/ives.jpg"

    }
]

export {timeline, reviews};