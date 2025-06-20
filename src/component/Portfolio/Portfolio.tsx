"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type PortfolioProps = {
  id: number;
  imageBefore: string;
  imageAfter: string;
  title: string;
};

function Portfolio({ data }: { data: PortfolioProps[] }) {
  const [portfolio, setPortfolio] = useState<PortfolioProps[]>([]);

  useEffect(() => {
    setPortfolio(data.slice(0, 3));
  }, [data]);

  const loadMore = useCallback(() => {
    const count = portfolio.length;
    if (count >= data.length) return;

    const newItems = data.slice(count, count + 3);

    setPortfolio((prev) => [...prev, ...newItems]);
  }, [portfolio, data]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-[1200px] m-auto">
        {portfolio.map((item) => (
          <div key={item.id} className="no-selection">
            <div className=" overflow-hidden flex flex-col gap-1  ">
              <Image
                src={item.imageAfter}
                alt={`Before ${item.id}`}
                className="w-full h-[350]  object-cover select-none pointer-events-none rounded-2xl"
                width={350}
                height={350}
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
      {portfolio.length < data.length && (
        <div className="flex justify-center items-center">
          <button onClick={loadMore} className=" rounded-lg bg-[#807170] text-white p-2  align-self-center">
            Загрузить еще
          </button>
        </div>
      )}
    </>
  );
}

export default Portfolio;
