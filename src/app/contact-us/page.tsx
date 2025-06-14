import ContactInfo from "@/components/Contact/ContactInfo"
import FormData from "@/components/Contact/FormData"
import GetTouchContact from "@/components/Contact/GetTouchContact"
import OurOfficeLocation from "@/components/Contact/OurOfficeLocation"
import {ContactData} from "@/data/contactUsData"

export default function ServicesPage() {

    const {getTouch, formData ,contactInfo ,ourOffice} = ContactData
    return (
        <main className="min-h-screen w-full bg-white py-16">
        <GetTouchContact data={getTouch} />
        <FormData data={formData}/>
        <ContactInfo data={contactInfo}/>
        <OurOfficeLocation data={ourOffice}/>

        
        
        </main>
    )
}