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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input placeholder="Type here" className="bg-transparent input input-bordered input-md w-full max-w-xs"
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input placeholder="Type here" className=" bg-transparent input input-bordered input-md w-full max-w-xs"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="textarea">Consulta:</label>
        <textarea className="bg-transparent textarea textarea-primary" placeholder="Bio"
         id="text"
         name="text"
         value={formData.text}
         onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
