"use client";

import { getNewsData } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function News() {
  const params = useParams();
  const { id, produto_id } = params;

  const [image, setImage] = useState("");
  const [newsData, setNewsData] = useState<NewsItemProps[]>();

  const { data, isLoading } = useQuery<NewsDataProps>({
    queryFn: () => getNewsData({ query: `?idproduto=${produto_id}` }),
    queryKey: ["reposData"],
  });

  useEffect(() => {
    if (data) {
      const dataFilter = data?.items.filter((news) => news.id === Number(id));
      setNewsData(dataFilter);
      const image: NewsImagens = JSON.parse(dataFilter[0].imagens);
      setImage(image.image_intro);
    }
  }, [data, id]);

  return (
    <section className="flex flex-row justify-between h-full w-full px-32 lg:px-[11.2rem] pt-[10rem]">
      <div className="flex flex-col items-center gap-16 my-24">
        <p className="uppercase text-primary text-16">
          {newsData && newsData[0].tipo}
        </p>
        <p className="text-ring text-12 ">
          {newsData && newsData[0].data_publicacao}
        </p>

        <h4 className="text-32">{newsData && newsData[0].titulo}</h4>

        <div className="h-[45rem] w-full overflow-hidden relative">
          <Image
            className="scale-105 transition ease-in-out delay-150 duration-500 hover:scale-110 hover:brightness-50"
            src={`https://agenciadenoticias.ibge.gov.br/${image}`}
            alt="Image News"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <p className="text-ring  mt-2">{newsData && newsData[0].introducao}</p>

        <div className="my-3 flex-center">
          {newsData && (
            <Link
              href={newsData[0].link}
              className="flex justify-start items-center gap-8 hover:underline hover:decoration-primary w-full"
            >
              <span className="text-14">Ler notícia completa</span>
              <MdKeyboardDoubleArrowRight className="text-primary" size={20} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
