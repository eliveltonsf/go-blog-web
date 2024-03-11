"use client";

import Link from "next/link";

const ItemNews = ({
  id,
  data_publicacao,
  titulo,
  tipo,
  introducao,
  produto_id,
  link,
}: NewsItemProps) => {
  return (
    <div className="flex flex-col gap-12 py-4 border-b pb-8 border-b-primary">
      <div>
        <span className="text-ring text-16">{tipo} - </span>
        <span className="text-ring text-16 ">{data_publicacao}</span>
      </div>

      <Link
        href={`${produto_id === 0 ? link : `/news/${id}/${produto_id}`}`}
        className="text-32 hover:underline hover:decoration-primary"
      >
        <h4>{titulo}</h4>
      </Link>

      <p className="mt-2 truncate ">{introducao}</p>
    </div>
  );
};

export default ItemNews;
