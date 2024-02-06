import ContactForm from "../components/ContactForm";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";


export default function ContactSection() {
   
  return (
        <>
        <section className="w-full flex justify-center items-center p-4 bg-grey">
            <div className="p-4 lg:w-3/5 md:w-full sm:w-full md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex lg:justify-center lg:flex-row">
            <ContactForm />
            <div className="m-10">
                <ul className="flex flex-col text-greenLight font-mono visited:text-red text-xl w-full text-left">
                <a href="" className="flex items-center text-left"><IoMdMail style={{ marginRight: '10px' }}/>mail</a>
                <a href=""className="flex items-center"><IoLogoWhatsapp style={{ marginRight: '10px' }} />Whatsapp</a>
                <a href=""className="flex items-center"><AiFillInstagram style={{ marginRight: '10px' }}/>instagram</a>
                </ul>
            </div>
            </div>
        </section>
        </>
    )
  }
  