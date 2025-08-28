import { Helper } from "@/helper/ServiceHelper";

export const Services = {
  serviceTitle: {
    title: "Services",
    subTitle: "Tailored Solutions for Your Business",
    describation:
      "At Harich Technologies, we recognize that every enterprise has distinct challenges and aspirations. Our commitment is to provide bespoke technology solutions meticulously crafted to align with your organizational objectives. Our team of seasoned professionals collaborates closely with you to design, develop, and implement strategies that not only address your immediate needs but also foster long term growth and operational excellence. From advanced software development and secure mobile applications to comprehensive cloud solutions and robust cybersecurity, we are dedicated to translating your vision into sustainable success.",
  },
  services: [
    {
      id: 1,
      type:"uiux-detail",
      title: "UI/UX Design",
      description:
        "We craft exceptional digital experiences through expert UI/UX design. Our design process prioritizes user needs and expectations, blending aesthetics with functionality. Using leading tools like Figma, Sketch, Adobe XD, and InVision, we design intuitive interfaces that engage users, enhance usability, and elevate brands across platforms and devices.",
      btnTitle: "Explore more",
      serviceIcons: [Helper.Ai, Helper.Figma, Helper.Ps, Helper.Xd],
      ImgBanner: Helper.UiUx,
    },

    {
      id: 2,
      title: "Web Development",
      type:"web-detail",
      description:
        "We design and develop dynamic, responsive websites that captivate users and achieve business objectives. Our team specializes in creating scalable, secure, and feature rich web solutions, from corporate websites to e-commerce platforms. By integrating modern technologies, we deliver seamless experiences that align with your brand and empower digital success.",
      btnTitle: "Explore more",
      serviceIcons: [Helper.ReactJs, Helper.Angular, Helper.JavaScript],
      ImgBanner: Helper.WebDevelopment,
    },
    {
      id: 3,
      title: "Mobile App Development",
      type:"mobile-app-detail",
      description:
        "Our mobile app development services deliver innovative, high performance applications tailored to your business goals. We create engaging native and cross platform apps for iOS and Android, focusing on seamless functionality, robust architecture, and scalability. From concept to launch, we build solutions that connect users, drive engagement, and foster growth.",
      btnTitle: "Explore more",
      serviceIcons: [
        Helper.Flutter,
        Helper.MobileAppDevelopment,
        Helper.Andriod,
        Helper.Ios,
      ],
      ImgBanner: Helper.MobileAppDevelopment,
    },
    {
      id: 4,
      title: "Digital Marketing",
      type:"digital-marketing-detail",
      description:
        "Our digital marketing services amplify your brand’s online presence, driving visibility and growth. We craft strategic campaigns that combine SEO, social media, content marketing, and paid advertising. With data driven insights and creative execution, we help businesses connect with their audiences, generate leads, and achieve measurable results in the digital landscape.",
      btnTitle: "Explore more",
      serviceIcons: [
        Helper.Facebook,
        Helper.Instagram,
        Helper.Linkdin,
        Helper.Ani,
        Helper.Mate,
      ],
      ImgBanner: Helper.DigitalMarketing,
    },
  ],
  whyUs: {
    title: "Why Us",
    subTitle: "Why Choose Harichtech?",
    titleDescribation:
      "Before the first pixel, we’re focused on what matters most: your vision.",
    describation:
      "With thoughtful planning, clean design, and smart technology, we build solutions that perform. We value timelines, communication, and craft  delivering work that’s both strategic and beautiful. At Harich Tech, you don’t just get a service you gain a partner.",
    list: [
      {
        id: 1,
        describation: "Experienced and skilled digital marketing professionals",
        LineImage: Helper.Line,
      },
      {
        id: 2,
        describation: "Customized strategies tailored to your business",
        LineImage: Helper.Line,
      },
      {
        id: 3,
        describation: "Data driven approach and measurable results",
        LineImage: Helper.Line,
      },
      {
        id: 4,
        describation: "Transparent communication and ongoing support",
        LineImage: Helper.Line,
      },
    ],
    rightImg: Helper.RightImage,
  },
};
