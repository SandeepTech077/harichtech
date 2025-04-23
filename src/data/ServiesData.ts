import { Helper } from "@/helper/ServiceHelper";

export const Services = {
    serviceTitle:{
        title:"Services",
        subTitle:"Tailored Solutions for Your Business",
        describation:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",

    },
    services:[
        {
            id:1,
            title:"UI/UX Design",
            description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
            btnTitle:"Explore more",
            serviceIcons:[Helper.Ai,Helper.Figma,Helper.Ps,Helper.Xd],
            ImgBanner:Helper.UiUx
        },
        {
            id:2,
            title:"Mobile App Development",
            description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
            btnTitle:"Explore more",
            serviceIcons:[Helper.Flutter,Helper.MobileAppDevelopment,Helper.Andriod,Helper.Ios],
            ImgBanner:Helper.MobileAppDevelopment
        },
        {
            id:3,
            title:"Web Development",
            description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
            btnTitle:"Explore more",
            serviceIcons:[Helper.ReactJs,Helper.Angular,Helper.JavaScript],
            ImgBanner:Helper.WebDevelopment
        },
        {
            id:4,
            title:"Digital Marketing",
            description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
            btnTitle:"Explore more",
            serviceIcons:[Helper.Facebook,Helper.Instagram,Helper.Linkdin],
            ImgBanner:Helper.DigitalMarketing

        },
    ]
}