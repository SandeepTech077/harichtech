import { Helper } from "@/helper/ContactUsHelper";

export const ContactData = {
  getTouch: {
    title: "Get In Touch",
    subTitle: "Stay Contact Us",
    describation:
      "Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.",
    socilaMedia: [
      {
        Icon: Helper.Facebook,
        link: "https://facebook.com/harichtech",
      },
      {
        Icon: Helper.Instagram,
        link: "https://instagram.com/harichtech",
      },

      {
        Icon: Helper.LinkedIn,
        link: "https://linkedin.com/company/harichtech",
      },
    ],
  },
  formData: {
    name: "Your Name",
    email: "Email Id",
    phone: "Mobile no.",
    countru: "Country",
    describation: "Describe Your Project",
    btnText: "Send Message",
    rightSideImage: Helper.RightImage,
  },
  contactInfo: {
    title: "Contact Info",
    subTitle: "For Business Inquires",
    info: [
      {
        icon: Helper.Call,
        title: "CALL US",
        detail: "+91 8200 6656 84",
      },
      {
        icon: Helper.Email,
        title: "EMAIL",
        detail: "Info@harichtech.com",
      },
    ],
  },
  ourOffice: {
    title: "Our Office",
    mapLink:
      "https://www.google.com/maps/place/Harich+Tech/@23.0408831,72.5022936,801m/data=!3m3!1e3!4b1!5s0x395e9b4458a6c34b:0x4a051f13b574b726!4m6!3m5!1s0x3959cb9ef6bd40eb:0x43ebf40375e2a4b2!8m2!3d23.0408831!4d72.5048685!16s%2Fg%2F11sy1h_542?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D",
    detail: {
      icon: Helper.India,
      title: "India",
      address:
        "Shilp 3, 3rd Floor, Sindhu Bhavan Road, Shilp Circle, Above Bajarang Grocery, Bodakdev, Ahmedabad, Gujarat 380054.",
    },
  },
};
