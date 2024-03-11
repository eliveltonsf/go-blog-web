"use client";

import CardNews from "@/components/CardNews";
import { TextInput } from "@/components/TextInput";
import { useCurrentPage } from "@/hook/useCurrentPage";
import { getNewsData } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PaginationFeed from "./components/PaginationFeed";

export default function Feed() {
  const { page } = useCurrentPage();
  const [formData, setFormData] = useState<FilterDataProps>(
    {} as FilterDataProps
  );

  const { register, handleSubmit, watch, setValue } =
    useForm<FilterDataProps>();

  const { mutate, data, isSuccess } = useMutation({
    mutationFn: ({ page, busca }: FilterDataProps) =>
      getNewsData({
        query: `?qtd=10&page=${page}${busca ? `&busca=${busca}` : ""}`,
      }),
  });

  useEffect(() => {
    mutate({ page: page, busca: formData.busca });
  }, [page, mutate, formData]);

  const handleInputChange = (e: any): any => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-[100%] pt-[10rem] pb-20 px-24 sm:px-[11.2rem] overflow-y-hidden">
      <div className="flex flex-col xl:flex-row w-[100%] gap-32">
        <div className="flex flex-col w-full xl:w-[20%] ">
          <div className="w-full xl:h-[50rem]">
            <TextInput
              type="text"
              name="busca"
              label="Buscar"
              placeholder="Buscar notícia"
              onChange={handleInputChange}
              register={register}
            />
          </div>
        </div>
        {isSuccess && (
          <div className="flex flex-col w-full xl:w-[80%]">
            <div className="flex flex-col xl:flex-row flex-wrap  xl:gap-4 gap-12">
              {data.items.map((news: NewsItemProps) => (
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
            <PaginationFeed
              count={data.count}
              nextPage={data.nextPage}
              page={page}
              previousPage={data.previousPage}
              totalPages={data.totalPages}
            />
          </div>
        )}
      </div>
    </section>
  );
}
