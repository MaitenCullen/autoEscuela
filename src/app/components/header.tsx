import Image from "next/image";

export default function Header() {
    return (
      <div className="flex min-w-screen flex-col justify-between bg-white">
        <Image
          className="relative"
          src="/headerImg.png"
          alt="header IMG"
          width={1000}
          height={700}
          priority
        />
      </div>
    )
  }
  