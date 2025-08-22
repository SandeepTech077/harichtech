import { Helper } from "@/helper/CareerHelper";

export const Career = {
  bannerSection: {
    title: "Build Your Future, Innovate the World",
    subTitle: "Take Your Ambitions to Power Global Innovations",
    banner: Helper.Banner,
  },
  hiring: {
    title: "Current Job Openings",
    hirings: [
      // {
      //   title: "Node.js Developer",
      //   experiance: "Experience : 02 Years",
      //   opening: "Open Position : 02",
      //   btnText: "Apply Now",
      // },
      // {
      //   title: "React.js Developer",
      //   experiance: "Experience : 03 Years",
      //   opening: "Open Position : 01",
      //   btnText: "Apply Now",
      // },
      {
        title: "BDE (Bussiness Development Executive)",
        experiance: "Experience : 02 Years",
        opening: "Open Position : 01",
        btnText: "Apply Now",
      },
      // {
      //   title: "Digital Marketing Specialist",
      //   experiance: "Experience : 02 Years",
      //   opening: "Open Position : 01",
      //   btnText: "Apply Now",
      // },
    ],
  },
  upload: {
    title: "Couldn't find any suitable openings?",
    describation:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    btnText: "Upload Your Resume",
    rightImage: Helper.CareerImage,
  },
  whyChooseUs: {
    title: "Why Us",
    subTitle: "Why Choose Harichtech?",
    titleDescribation:"Before the first pixel, we’re focused on what matters most: your vision.",
    describation:
      "With thoughtful planning, clean design, and smart technology, we build solutions that perform. We value timelines, communication, and craft   delivering work that’s both strategic and beautiful. At Harich Tech, you don’t just get a service you gain a partner.",
    list: [
      {
        id: 1,
        describation: "Experienced and skilled designers",
        LineImage: Helper.Line,
      },
      {
        id: 2,
        describation: "Customized solutions tailored to your specific needs",
        LineImage: Helper.Line,
      },
      {
        id: 3,
        describation: "Commitment to delivering exceptional results",
        LineImage: Helper.Line,
      },
      {
        id: 4,
        describation: "Focus on user satisfaction and engagement",
        LineImage: Helper.Line,
      },
    ],
    rightImg: Helper.RightImage,
  },
};
