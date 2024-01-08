import Image from "next/image";

export default function Header() {
  return (
      <div className="flex min-w-screen justify-between bg-white">
        <div>
        <Image
          className="relative"
          src="/headerImg.png"
          alt="header IMG"
          width={1000}
          height={700}
          priority
        />
        </div>
        <div className="flex p-10">
          <div className="flex items-center">
            <Image
                  className="relative"
                  src="/logo.png"
                  alt="logo IMG"
                  width={150}
                  height={150}
                  priority
              />
              <div className="flex flex-col">
                  <h1 className="text-black">Rumbo Norte</h1>
                  <h2 className="text-black">Aprendizaje: 10 Abollones: 0</h2>
              </div>
            </div> 
        </div>
      


      </div>
    )
  }
  