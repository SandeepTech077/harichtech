import { Helper } from "@/helper/AboutUsHelper";

export const AboutUsData = {
  aboutUs: {
    title: "About Us",
    subTitle: "Accelerate Your Business with Harichtech",
    descrobation: [
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
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
        number: "50+",
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
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
      ],
      btnTitle: "Join our team",
    },
    rightSide: {
      cards: [
        {
          id: 1,
          title: "Our Mission",
          description:
            "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          icon: Helper.Target,
        },
        {
            id: 2,
            title: "Our Vision",
            description:
            "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            icon: Helper.Target,
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
