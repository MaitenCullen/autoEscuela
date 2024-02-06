"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  text: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    text: ''
  });

  const handleChange =(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend o hacer cualquier otra cosa que necesites
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='m-10'>
      <div className='flex flex-col text-black font-mono'>
        <label htmlFor="name">Name:</label>
        <input placeholder="Type here" className="bg-white border-2 border-green input-success input input-bordered input-md w-full my-2 text-white"
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange} />
      </div>
      <div className='flex flex-col text-black font-mono'>
        <label htmlFor="email">Email:</label>
        <input placeholder="Type here" className=" bg-white input  border-2 border-green input-success input-bordered input-md  my-2 w-full text-white"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col text-black font-mono'>
        <label htmlFor="textarea">Consulta:</label>
        <textarea className="bg-white textarea textarea-bordered textarea-green  textarea-success border-2 border-green input-success text-white my-2" placeholder="Bio"
         id="text"
         name="text"
         value={formData.text}
         onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className='btn btn-green bg-green text-white border-transparent'>Submit</button>
    </form>
  );
}
