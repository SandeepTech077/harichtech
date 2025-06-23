import { Helper } from "@/helper/MoreBlogsHelper";



export const MoreBlogsData = {
  blogsMap: [
    {
      id: 1,
      title: "App Development",
      Banner: Helper.AppBanner,
      mobileBanner: Helper.MobileAppBanner,
      blogs: [
        {
          title: "What is App Development",
          description: [
            "App Development is the process to create applications for mobile phones, tablets, and other mobile devices. By Developers, it is developed for IOS and Android mostly. It can be downloaded from the app store and it can be accessed through a web browser also. Languages like JAVA, HTML 5, C#, Swift are used for App Development.",
            "Elements like screen size, configurations, Hardware specifications are considered by the developer while building the app. To provide a user fast, clean, and easy user interface, it is necessary that each mobile element should come together."
          ]
        },
        {
          title: "Choosing a Platform for App Development",
          description: [
            "There are two very famous platforms of applications, Android and IOS. Android platform is a very famous platform for building applications. Many app developers prefer the Android platform compared to IOS because 70% of smartphones are running on Android. The reason is Google Play Store has fewer restrictions than the Apple Store.",
            "The platform for application development depends on the user’s intention. For example, you are developing an application for a company’s employee who uses Android mobiles, then you will develop an app on the Android platform. And if the employee is using an Apple phone, you will develop an app in IOS. However, sometimes you need to develop on both platforms at the same time."
          ]
        },
        {
          title: "Front End Development and Back End Development",
          description: [
            "App development process has two parts: Front End and Back End Development. Frontend focuses on how the app looks while Backend focuses on how the app works. Front End involves design, images, presentation, etc. Back End involves site security, performance, and logic.",
            "Front End languages: JAVA, HTML, CSS. Back End languages: PHP, Python, Node.js."
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Web Development",
      Banner: Helper.WebBanner,
      mobileBanner: Helper.MobileWebBanner,
      blogs: [
        {
          title: "What is Web Development?",
          description: [
            "Web Development involves creating and maintaining websites, including programming, design, publishing, and database management. It enhances the user’s experience and is done using various coding languages based on the platform.",
            "Types of Web Development: Frontend and Backend.",
            "Frontend Development deals with UI and uses HTML, CSS, JavaScript.",
            "Backend Development involves server, database, and application logic, using languages like Java, Python, PHP."
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Digital Marketing",
      Banner: Helper.DigitalBanner,
      mobileBanner: Helper.MobileDigitalBanner,
      blogs: [
        {
          title: "Introduction to Digital Marketing",
          description: [
            "Most people spend their time online — for entertainment, news, education, and shopping. Digital marketing has grown rapidly compared to traditional marketing, helping marketers reach users where they spend the most time — the internet."
          ]
        },
        {
          title: "Types of Digital Marketing",
          description: [
            "1. SEO (Search Engine Optimization)",
            "Optimizing your website to rank higher in search engines. Includes On-page SEO and Off-page SEO.",
            "2. Content Marketing",
            "Writing blogs or articles to generate organic traffic and explain expertise.",
            "3. Pay Per Click (PPC)",
            "Advertisers pay publishers per ad click. E.g., Google Ads, Facebook Ads.",
            "4. Social Media Marketing",
            "Promoting content on platforms like Facebook, Instagram, Twitter.",
            "5. Sponsored Content",
            "Paying influencers or other brands to promote your services.",
            "6. Email Marketing",
            "Sending promotional content or offers through email.",
            "7. Affiliate Marketing",
            "Promoting someone else’s service and earning commission through referrals."
          ]
        },
        {
          title: "Benefits of Digital Marketing",
          descriptions: [
            {
              title: "1. Target Wide Audience",
              description: [
                "Digital marketing removes geographical limits and can reach users globally via the internet."
              ]
            },
            {
              title: "2. Cost Efficiency",
              description: [
                "Compared to traditional marketing, it’s more cost-effective and offers broader audience targeting."
              ]
            },
            {
              title: "3. Grows Business",
              description: [
                "It helps generate leads, connect with customers, and increase sales through targeted campaigns."
              ] 
            }
          ]
        }
      ]
    }
  ]
};
