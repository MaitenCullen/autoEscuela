import Testimonial from "../components/Testimonial"
import TestimonialData from "../components/mock/TestimonialData";


export default function TestimonialSection() {
    const TestimonialService = TestimonialData();
    const TestimonialArray = Object.values(TestimonialService);
  return (
        <>
        <section className="w-full p-4">
            <div className="p-4 flex justify-between w-full">
            {TestimonialArray.map((testimonial) => (
            <Testimonial  key={testimonial.id} {...testimonial}/>
        ))}
            </div>
        </section>
        </>
    )
  }
  