import Image from "next/image";

export default function Header() {
  return (
      <div className="flex min-w-screen justify-center bg-white w-full">
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
        <div className="flex flex-col justify-center items-center w-3/5">
          <div className="flex items-center ">
            <Image
                  className="relative"
                  src="/logo.png"
                  alt="logo IMG"
                  width={100}
                  height={100}
                  priority
              />
              <div className="flex flex-col p-4">
                  <h1 className="text-black ">Rumbo Norte</h1>
                  <h2 className="text-black">Aprendizaje: 10 Abollones: 0</h2>
              </div>
          </div> 
            <div> 
              <h1 className="text-black leading-9 text-center">Rumbo Norte</h1>
              <h2 className="text-black leading-9 text-center">Escuela de manejo pensada a tu medida</h2>
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-black leading-7 text-center">Con varios años de experiencia, nos posicionamos como una autoescuela distinta. Las clases son personalizadas, podes asistir a la cantidad que de verdad vos necesites, aprendiendo sin presiones. Creemos que cada persona tiene tiempos y necesidades distintas al momento de aprender, por ello nuestras clases son distintias según lo que el usuario desee. </p>
              <button className="btn  btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Contactanos</button>
            </div>
        </div>
      


      </div>
    )
  }
  