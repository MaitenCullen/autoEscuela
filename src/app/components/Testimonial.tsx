"use client"
import React from "react";
import { TiStar } from "react-icons/ti";


interface TestimonialProps {
    id: number;
    title: string;
    description: string;
    button: string;
}

export default function Testimonial(props: TestimonialProps) {
    return (
        <div className="card  shadow-xl  bg-white text-neutral-content m-2">
        <div className="card-body items-center text-center p-2">
          <h2 className="card-title text-greenLight font-mono">{props.title}</h2>
          <p className="text-black">{props.description}</p>
          <div className="flex">
          <TiStar color="red" />
          <TiStar color="red"/>
          <TiStar color="red"/>
          <TiStar color="red"/>
          <TiStar color="red"/>
          </div>
        </div>
      </div>
    );
}
