import FbLogo from "./fbLogo";
import InstaLogo from "./instaLogo";
import MailLogo from "./mailLogo";
import PhoneLogo from "./PhoneLogo";
import WhatsappLogo from "./whatsappLogo";
import Link from "next/link";
export default function Header() {
    return(
        <div className="bg-blue h-[70px] flex gap-[720px]">
            <div className="ml-10 mt-5">
                <ul className="flex gap-3">
                    <li className=""><Link href="https://www.facebook.com/dogsnepalpetstore?mibextid=ZbWKwL" target="_blank"><FbLogo /></Link></li>
                    <li className=""><Link href="https://www.instagram.com/dogsnepal/?hl=en" target="_blank"><InstaLogo /></Link></li>
                    <li><Link href="https://api.whatsapp.com/send/?phone=9841000571&text&type=phone_number&app_absent=0" target="_blank"><WhatsappLogo /></Link></li>
                </ul>  
            </div>
            <div className="mt-5 flex h-8">
                <div className="border-r-2 flex gap-[3px] pr-3">
                    <PhoneLogo />
                    <p className="text-white  font-normal text-base">+977-9841000571</p>
                </div>
                <div className="pl-4 flex gap-[3px]">
                    <MailLogo />
                    <p className="text-white pr-4 font-normal text-lg tracking-wide font-poppins justify-center text-center">dogsnepal2022@gmail.com</p>
                </div>
                
            </div>
           
        </div>
    );

}; 