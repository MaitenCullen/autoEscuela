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
              <h1 className="text-black leading-9 text-center">TiTUlo</h1>
              <h2 className="text-black leading-9 text-center">descripcion</h2>
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-black leading-7 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sit quasi! Mollitia, temporibus delectus, et blanditiis quae provident quibusdam perspiciatis iste officiis assumenda atque. Expedita labore dicta nam distinctio quasi.</p>
              <button className="btn  btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Contactanos</button>
            </div>
        </div>
      


      </div>
    )
  }
  