import Image from "next/image";
import Card from "../components/Card";
import data from "../components/mock/Data";


export default function Services() {
    const Servicedata = data();
    const servicesArray = Object.values(Servicedata);
  return (
        <>
        <section className="w-full p-4">
            <div className="p-4 md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex lg:justify-center lg:flex-row w-full">
            {servicesArray.map((service) => (
            <Card  key={service.id} {...service}/>
        ))}
            </div>
        </section>
        </>
    )
  }
  