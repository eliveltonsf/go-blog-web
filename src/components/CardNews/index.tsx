/* eslint-disable react/display-name */
"use client";

import Link from "next/link";
import { forwardRef, Ref } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CardNews = forwardRef(
  (
    {
      id,
      imagens,
      data_publicacao,
      titulo,
      tipo,
      introducao,
      produto_id,
      link,
      ...rest
    }: NewsItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const image: NewsImagens = JSON.parse(imagens ? imagens : "");

    return (
      <Card className=" w-full xl:w-[33%] rounded-none" ref={ref} {...rest}>
        <CardHeader>
          <div className="h-[20rem] w-full overflow-hidden relative">
            <Link
              href={`${produto_id === 0 ? link : `/news/${id}/${produto_id}`}`}
              className="text-32 hover:underline hover:decoration-primary"
            >
              <Image
                className="scale-105 transition ease-in-out delay-150 duration-500 hover:scale-110 hover:brightness-50"
                src={`https://agenciadenoticias.ibge.gov.br/${image.image_intro}`}
                alt="Image News"
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </div>
          <CardTitle className="tracking-widest h-auto p-12">
            <div className="flex flex-col justify-between h-auto pb-4 sm:relative ">
              <div className="flex flex-col gap-4 ">
                <p className="text-ring text-12 ">{data_publicacao}</p>
                <p className="uppercase text-primary text-16">{tipo}</p>
              </div>
            </div>
            <Link
              href={`${produto_id === 0 ? link : `/news/${id}/${produto_id}`}`}
              className="text-24 hover:underline hover:decoration-primary"
            >
              <h4 className="">{titulo}</h4>
            </Link>
          </CardTitle>
          <CardDescription className="text-ring px-12">
            <p className="mt-2 text-16 truncate">{introducao}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-400 text-text p-12">
          <Link
            href={link}
            className="flex justify-start items-center gap-8 hover:underline hover:decoration-primary w-full"
          >
            <span className="text-14">Ler notícia completa</span>
            <MdKeyboardDoubleArrowRight className="text-primary" size={20} />
          </Link>
        </CardContent>
      </Card>
    );
  }
);

export default CardNews;
