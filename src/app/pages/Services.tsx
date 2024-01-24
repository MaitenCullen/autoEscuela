import Image from "next/image";
import Card from "../components/Card";
import data from "../components/mock/Data";


export default function Services() {
    const Servicedata = data();
    const servicesArray = Object.values(Servicedata);
  return (
        <>
        <section className="w-full p-4">
            <div className="p-4 flex justify-between w-full">
            {servicesArray.map((service) => (
            <Card  key={service.id} {...service}/>
        ))}
            </div>
        </section>
        </>
    )
  }
  