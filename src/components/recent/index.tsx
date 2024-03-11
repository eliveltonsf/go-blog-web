"use client";

import { getNewsData } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ItemNews from "./components/ItemNews";

export default function Recent() {
  const { data, isLoading } = useQuery({
    queryFn: () => getNewsData({ query: "?qtd=3" }),
    queryKey: ["reposData"],
  });

  return (
    <section className="h-full w-full py-[20rem] pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div className="flex flex-col  items-center lg:items-start gap-16">
          <Image
            width={200}
            height={200}
            src="/assets/best-news.svg"
            alt="Icone Banner"
            className="inline-block w-[40rem] lg:w-[30rem]"
          />
          <span className="text-48">Veja as mais novas notícias do mês.</span>
          <p className="text-16 font-medium text-ring mr-32">
            Se chegou até aqui, pare e enriqueça seu conhecimento com os posts
            mais curtidos do momento.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          {!isLoading &&
            data.items.map((news: NewsItemProps) => (
              <ItemNews
                key={news.id}
                id={news.id}
                tipo={news.tipo}
                titulo={news.titulo}
                introducao={news.introducao}
                data_publicacao={news.data_publicacao}
                imagens={news.imagens}
                produto_id={news.produto_id}
                link={news.link}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
