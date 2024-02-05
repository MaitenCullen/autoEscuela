import ContactForm from "../components/ContactForm";

export default function ContactSection() {
   
  return (
        <>
        <section className="w-full flex justify-center p-4 bg-grey">
            <div className="p-4 flex justify-between items-center w-1/2">
            <ContactForm />
            <div>
                <ul>
                <li>mail</li>
                <li>telefono</li>
                <li>instagram</li>
                </ul>
            </div>
            </div>
        </section>
        </>
    )
  }
  