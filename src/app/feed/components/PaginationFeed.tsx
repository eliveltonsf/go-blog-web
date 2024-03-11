import { useCurrentPage } from "@/hook/useCurrentPage";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function PaginationFeed({
  count,
  nextPage,
  page,
  previousPage,
  totalPages,
}: {
  count: number;
  nextPage: number;
  page: number;
  previousPage: number;
  totalPages: number;
}) {
  const { setPage } = useCurrentPage();

  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pages.length) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex justify-between items-center h-[10rem] ">
      {page > 1 && (
        <button
          className="flex justify-center items-center gap-4"
          onClick={() => handlePrevPage()}
        >
          <MdKeyboardDoubleArrowLeft className="text-primary" size={24} />
          Anterior
        </button>
      )}

      {page <= totalPages && (
        <button
          className="flex justify-center items-center gap-4"
          onClick={() => handleNextPage()}
        >
          Próxima
          <MdKeyboardDoubleArrowRight className="text-primary" size={24} />
        </button>
      )}
    </div>
  );
}
