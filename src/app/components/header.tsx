import Image from "next/image";

export default function Header() {
  return (
      <div className=" min-w-screen  bg-white w-full md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex lg:justify-center lg:flex-row">
        <div className="w-full">
        <Image
          className="relative"
          src="/headerImg.png"
          alt="header IMG"
          width={1000}
          height={700}
          priority
        />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-4/5 p-3">
          <div className="flex items-center ">
            <Image
                  className="relative"
                  src="/logo.png"
                  alt="logo IMG"
                  width={100}
                  height={100}
                  priority
              />
              <div className="flex flex-col p-6">
                  <h1 className="text-black font-mono font-semibold text-xl">Rumbo Norte</h1>
                  <h2 className="text-black font-mono font-semibold text-xl">Aprendizaje: 10 Abollones: 0</h2>
              </div>
          </div> 
            <div> 
              <h2 className="text-black leading-9 text-center font-semibold text-greenLight font-sans text-lg">Escuela de manejo pensada a tu medida</h2>
            </div>
            <div className="flex flex-col items-center my-4 ">
              <p className="text-black leading-7 text-center font-sans text-base my-4">Con varios años de experiencia, nos posicionamos como una autoescuela distinta. Las clases son personalizadas, podes asistir a la cantidad que de verdad vos necesites, aprendiendo sin presiones. Creemos que cada persona tiene tiempos y necesidades distintas al momento de aprender, por ello nuestras clases son distintias según lo que el usuario desee. </p>
              <button className="btn text-white btn-success">Contactanos</button>
            </div>
        </div>
      


      </div>
    )
  }
  