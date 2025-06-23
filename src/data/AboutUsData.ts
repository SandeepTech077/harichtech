import { Helper } from "@/helper/AboutUsHelper";

export const AboutUsData = {
  aboutUs: {
    title: "About Us",
    subTitle: "Accelerate Your Business with Harichtech",
    descrobation: [
      "At Harich Technologies, we are dedicated to empowering businesses and individuals through innovative technology solutions. Founded on a passion for excellence and a commitment to delivering value, we specialize in providing cutting-edge IT services, software development, and digital transformation strategies.",
      "Our team of skilled professionals combines deep technical expertise with a client-focused approach, ensuring that every project is tailored to meet the unique needs of our partners. From custom software and web applications to cloud services and IT consulting, we help our clients navigate the ever-evolving technology landscape with confidence.",
      "At Harich Technologies, we believe in building lasting relationships based on trust, transparency, and results. Our mission is to drive growth and success by delivering solutions that are not only innovative but also reliable and scalable."
    ],
    BannerImg: Helper.Banner,
  },
  ourStatus: {
    status: [
      {
        id: 1,
        title: "Project Completed",
        number: "45+",
        icon: Helper.ProjectCompleted,
      },
      {
        id: 2,
        title: "Client Satisfied",
        number: "40+",
        icon: Helper.HappyClient,
      },
      {
        id: 3,
        title: "Countries",
        number: "4+",
        icon: Helper.Countries,
      },
      {
        id: 4,
        title: "Years of Experience",
        number: "2+",
        icon: Helper.Experience,
      },
    ],
  },
  innovationMeet: {
    title: "Know us better",
    leftSide: {
      title: "Where Innovation Meets Satisfaction",
      describation: [
        "At Harich Technologie, innovation is at the core of everything we do. We combine cutting-edge technology with creative solutions to address the challenges of today and shape the opportunities of tomorrow. Our dedicated team of experts is committed to turning ambitious ideas into tangible, impactful results, ensuring that every project we undertake is guided by passion, precision, and a relentless drive to excel.",
        "Satisfaction isn’t just a goal at Harich Technologie - it’s our promise. From the initial consultation to project completion and beyond, we prioritize your needs, delivering seamless experiences that exceed expectations. Every interaction is marked by professionalism, trust, and an unwavering commitment to quality. Discover where innovation meets satisfaction -where Harich Technologie empowers your vision and transforms possibilities into success.",
      ],
      btnTitle: "Join our team",
    },
    rightSide: {
      cards: [
        {
          id: 1,
          title: "Our Mission",
          description:
            "To be a leading technology partner recognized for innovation, quality, and customer success - empowering businesses to thrive in a rapidly evolving digital world.",
          icon: Helper.Target,
        },
        {
            id: 2,
            title: "Our Vision",
            description:
            "To provide innovative, efficient, and user-friendly technology solutions that help businesses grow, improve operations, and connect meaningfully with their customers. We strive to deliver excellence through collaboration, creativity, and integrity.",
            icon: Helper.Vision,
        }
      ],
    },
  },
  client:{
    title:"Client",
    subTitle:"See What Our Clients Have to Say",
    cards:[
        {
            id:1,
            name:"Mark Zellers",
            title:"CEO",
            Img:Helper.ClientProfile
        },
        {
            id:2,
            name:"John Doe",
            title:"CEO",
            Img:Helper.ClientProfile
        },
        {
            id:3,
            name:"Jane Doe",
            title:"CEO",
            Img:Helper.ClientProfile
        },
        {
            id:4,
            name:"Jane Doe",
            title:"CEO",
            Img:Helper.ClientProfile
        },
    ]
  },
  
};
