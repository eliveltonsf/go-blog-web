import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between h-full w-full py-[20rem] pb-20 ">
      <div className=" flex items-center w-full lg:w-[50%] mb-32 lg:mb-0">
        <p className="text-48">
          Explore o Mundo das Notícias: Informação, Conhecimento e Perspectiva
          em Tempo Real!
        </p>
      </div>
      <div className=" flex justify-end items-center w-full lg:w-[50%]">
        <Image
          width={600}
          height={600}
          src="/assets/icon-banner.svg"
          alt="Icone Banner"
        />
      </div>
    </section>
  );
}
