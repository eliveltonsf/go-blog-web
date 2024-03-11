"use client";

import { getNewsData } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Banner() {
  const [image, setImage] = useState("");
  const { data, isLoading } = useQuery<NewsDataProps>({
    queryFn: () => getNewsData({ query: "?qtd=3" }),
    queryKey: ["reposData"],
  });

  useEffect(() => {
    if (data) {
      const img: NewsImagens = data && JSON.parse(data.items[0].imagens);
      setImage(img.image_intro);
    }
  }, [data]);

  return (
    <section className="h-[100vh] w-[100vw] py-[20rem] px-32 sm:px-[11.2rem]">
      <div className="h-[45rem] w-full overflow-hidden relative">
        <Image
          className="scale-105 transition ease-in-out delay-150 duration-500 hover:scale-110 hover:brightness-50"
          src={`https://agenciadenoticias.ibge.gov.br/${image}`}
          alt="Image News"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center gap-16 my-24">
        <p className="text-ring text-12 ">{data?.items[0].data_publicacao}</p>
        <p className="uppercase text-primary text-16">{data?.items[0].tipo}</p>

        <Link
          href={"/news/" + data?.items[0].id}
          className="text-48 hover:underline hover:decoration-primary"
        >
          <h4 className="">{data?.items[0].titulo}</h4>
        </Link>

        <p className="text-ring  mt-2">{data?.items[0].introducao}</p>

        <div className="my-3 flex-center">
          <Link
            href={"/news/" + data?.items[0].id}
            className="flex justify-start items-center gap-8 hover:underline hover:decoration-primary w-full"
          >
            <span className="text-14">Ler mais</span>
            <MdKeyboardDoubleArrowRight className="text-primary" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
