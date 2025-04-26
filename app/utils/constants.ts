import { service } from "@/interfaces"
import { foot1, foot2, foot3, foot4, foot5, serve_one, serve_three, serve_two, service_one } from "@/public/png"
import { Insta, LinkedIn, Mail, Phone, Times, WhiteFacebook, } from "@/public/svgs"
import { Metadata } from "next"
import  { ElementType } from "react"


export const footerText = `
  Lorem ipsum dolor sit amet consectetur. Odio turpis vitae velit adipiscing.
  Eu mattis diam nulla at egestas faucibus et. Pellentesque ac sit nulla maecenas 
  aliquam purus augue amet consequat. Accumsan vivamus nisl amet ultrices suspendisse ornare. 
  Odio iaculis eget tempor dictumst.Tincidunt nunc elit aliquam quisque leo pharetra. Amet vulputate metus nulla in.
`

export const quickLinks = [
 
  // {
  //   name: "Add Reviews",
  //   link: "/reviews"
  // },
  {
    name: "About Us",
    link: "/about_us"
  },
  {
    name: "Contact Us",
    link: "/contact_us"
  },
  {
    name: "FAQ",
    link: "/faq"
  },
]

export const getInTouch : {text: string, icon: ElementType}[] = [
  {
    text: "Filmcontemporary@gmail.com",
    icon: Mail,
  },
  {
    text: "123456777",
    icon: Phone
  }
]


  export const socials: {social: string, handle:string, link:string, icon: ElementType}[] = [
    {
      social: "facebook",
      handle: "filmcontemporary.fb",
      link: "/",
      icon: WhiteFacebook
    },
    {
      social: "instagram",
      handle: "filmcontemporary _",
      link: "/",
      icon: Insta
    },
    {
      social: "X",
      handle: "filmcontemporary _",
      link: "/",
      icon: Times,
    },
    {
      social: "linkedIn",
      handle: "filmcontemporary _",
      link: "/",
      icon: LinkedIn
    },
  ]


export const services: service[] = [
  {
    name: "Lorem Ipsu",
    title:"Lorem Ipsum",
    text: footerText,
    link: "/services/lorem_ipsu",
    icon: service_one
  },
  
  {
    name: "Lorem Ips",
    title:"Lorem Ipsum",
    text: footerText,
    link: "/services/Lorem_ips",
    icon: service_one
  },

  {
    name: "Lorem Ip",
    title:"Lorem Ipsum",
    text: footerText,
    link: "/services/lorem_ip",
    icon: service_one
  },
  {
    name: "Lorem I",
    title:"Lorem Ipsum",
    text: footerText,
    link: "/services/lorem_i",
    icon: service_one
  },
  {
    name: "Lorem",
    title:"Lorem Ipsum",
    text: footerText,
    link: "/services/lorem",
    icon: service_one
  },
  {
    name: "Lore",
    title:"Lorem Ipsum",
    text: footerText,
    link: "/services/lore",
    icon: service_one
  },
  {
    name: "Lor",
    title:"Lorem Ipsum",
    text: footerText,
    link: "/services/lor",
    icon: service_one
  },
  
]

export const menuLinks = [
  {
    name: "Home",
    link: "/"
  },
  // {
  //   name: "Add Reviews",
  //   link: "/reviews"
  // },
  {
    name: "About us",
    link: "/about_us"
  },
  {
    name: "contact",
    link: "contact"
  }
  // {
  //   name: "Login",
  //   link: "/login"
  // },
  // {
  //   name: "Sign Up",
  //   link: "/sign_up"
  // },
]

export const Gallery = [
  {
    id:1,
    img:foot1 
  },
  {
    id: 2,
    img:foot2
  },
  {
    id:3,
    img:foot3
  },
  {
    id:4,
    img:foot4,
  },
  {
    id:5,
    img:foot5
  }
]

export const Review = [
  {
    id:1,
    name: "tobby",
    review: `
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and 
      scrambled it to make a type specimen book.
    `
  },

  {
    id:2,
    name: "jacob",
    review: `
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and 
      scrambled it to make a type specimen book.
    `
  },
  {
    id:3,
    name: "marty",
    review: `
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and 
      scrambled it to make a type specimen book.
    `
  },
  {
    id:4,
    name: "Debbie",
    review: `
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and 
      scrambled it to make a type specimen book.
    `
  },

  {
    id:5,
    name: "Eunice",
    review: `
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and 
      scrambled it to make a type specimen book.
    `
  },

]

export const serve = [
  {
    id:1,
    name: "Lorem Ipsum",
    content: `
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and 
      scrambled it to make a type specimen book.
    `,
  image: serve_one
  },

  {
    id:2,
    name: "jacob",
    content: `
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and 
      scrambled it to make a type specimen book.
    `,
    image:serve_two,
  },
  {
    id:3,
    name: "marty",
    content: `
      Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and 
      scrambled it to make a type specimen book.
    `,
    image:serve_three
  },


]

export const calenderlyUser = 
"user=https://api.calendly.com/users/c8b10734-c82c-427e-9e11-7b9f3171db88"

export const metadata: Metadata = {
  title: "Film Contemporary",
  description: "Generated by create next app",
};
