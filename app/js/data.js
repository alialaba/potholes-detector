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

const questions = [
    {
      id: 1,
      title: 'Do I have to allow the use of cookies?',
      info:
        'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
    },
    {
      id: 2,
      title: 'How do I change my My Page password?',
      info:
        'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
      },
    {
      id: 3,
      title: 'What is BankID?',
      info:
        'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
    
      },
    {
      id: 4,
      title: 'Whose birth number can I use?',
      info:
        'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
    },
    {
      id: 5,
      title: 'When do I recieve a password ordered by letter?',
      info:
        'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
    },
  ]
  

export {timeline, reviews, questions};