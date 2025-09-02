import { Helper } from "@/helper/BlogHelper";

export const BlogData = {
  BannerSection: {
    buttonText: "Our Blogs",
    heading: "Explore Our Latest",
    highlightText: "Blogs",
  },

  categories: [
    "App Development",
    "Website Development",
    "Web App Development",
    "Artificial Intelligence",
  ],

  blogs: [
    {
      id: 1,
      type: "smarter-marketing-with-ai",
      image: Helper.SmartMarketing,
      title: "Smarter Marketing with AI: How to Stay Ahead ...",
      dateAndBy: "by Harichtech on March 26, 2024",
      description:
        "In 2025, the marketing landscape is no longer just digital it’s intelligent. Artificial Intelligence (AI) has emerged as a cornerstone of modern marketing strategies...",
      btnTitle: "Read More",
      btnArrow: Helper.blackArrow,
    },

    {
      id: 2,
      type: "ai-powered-analytics",
      image: Helper.AiPoweredByAnalytic,
      title: "AI Powered Analytics: See Beyond the Data",
      dateAndBy: "by Harichtech on April 1, 2024",
      description:
        "Collecting data is easy. Making sense of it? That’s where AI shines. In today’s digital landscape, businesses are drowning in data   web traffic, customer behavior...",
      btnTitle: "Read More",
      btnArrow: Helper.blackArrow,
    },

    {
      id: 3,
      type: "automate-or-fall-behind",
      image: Helper.AutomateAndFall,
      title: "Automate or Fall Behind: The Future of ...",
      dateAndBy: "by Harichtech on April 3, 2024",
      description:
        "Today’s consumers expect instant responses, personalized experiences, and consistent communication  all at scale...",
      btnTitle: "Read More",
      btnArrow: Helper.blackArrow,
    },

    {
      id: 4,
      type: "ai-meets-creativity",
      image: Helper.AiMeetCretive,
      title: "AI Meets Creativity: The New Face of Digital...",
      dateAndBy: "by Harichtech on April 8, 2024",
      description:
        "In the age of AI, creativity isn’t dying   it’s evolving. With the right tools, marketers and designers can supercharge their storytelling with data backed...",
      btnTitle: "Read More",
      btnArrow: Helper.blackArrow,
    },
    {
      id: 5,
      type: "the-death-of-manual-targeting",
      image: Helper.DeathOfManual,
      title: "The Death of Manual Targeting (and the ...",
      dateAndBy: "by Harichtech on March 28, 2024",
      description:
        "In the early days of digital marketing, success was all about impressions. Get your brand in front of as many eyeballs ...",
      btnTitle: "Read More",
      btnArrow: Helper.blackArrow,
    },
  ],
};
