"use client";

import CardNews from "@/components/CardNews";
import { getNewsData } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export default function Best() {
  const { data, isLoading } = useQuery({
    queryFn: () => getNewsData({ query: "?qtd=3" }),
    queryKey: ["reposData"],
  });

  return (
    <section className="h-full w-full py-[20rem] pb-20">
      <div className="flex flex-col gap-16">
        <span className="text-48">As Melhores e mais acessadas Notícias.</span>
        <p className="text-16 font-medium text-ring mr-32">
          Não fique parado e veja o que todos estão interessados, se divirta com
          esse conhecimento.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-16 mt-24">
        {!isLoading &&
          data.items.map((news: NewsItemProps) => (
            <CardNews
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
    </section>
  );
}
