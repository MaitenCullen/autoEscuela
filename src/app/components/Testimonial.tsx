"use client"
import React from "react";


interface TestimonialProps {
    id: number;
    title: string;
    description: string;
    button: string;
}

export default function Testimonial(props: TestimonialProps) {
    return (
        <div className="card w-96 bg-transparent text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{props.button}</button>
            <button className="btn btn-ghost">{props.button}</button>
          </div>
        </div>
      </div>
    );
}
