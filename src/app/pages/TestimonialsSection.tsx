import Testimonial from "../components/Testimonial"
import TestimonialData from "../components/mock/TestimonialData";


export default function TestimonialSection() {
    const TestimonialService = TestimonialData();
    const TestimonialArray = Object.values(TestimonialService);
  return (
        <>
        <section className="w-full p-4 bg-transparent">
            <div className="p-4 md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex lg:justify-center lg:flex-row w-full">
            {TestimonialArray.map((testimonial) => (
            <Testimonial  key={testimonial.id} {...testimonial}/>
        ))}
            </div>
        </section>
        </>
    )
  }
  