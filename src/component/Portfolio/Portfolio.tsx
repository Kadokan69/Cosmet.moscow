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
    setPortfolio(data.slice(0, 2));
  }, [data]);

  const loadMore = useCallback(() => {
    const count = portfolio.length;
    if (count >= data.length) return;

    const newItems = data.slice(count, count + 2);

    setPortfolio((prev) => [...prev, ...newItems]);
  },[portfolio]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-[1200px] m-auto">
        {portfolio.map((item) => (
          <div key={item.id}>
            <div className="relative overflow-hidden shadow-lg  rounded-4xl w-full group h-[350px]">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 hover:opacity-0 ">
                <Image
                  src={item.imageAfter}
                  alt={`Before ${item.id}`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500  hover:opacity-100  opacity-0"
                onTouchStart={(e) => {
                  e.currentTarget.classList.add("opacity-100");
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.classList.remove("opacity-100");
                }}
              >
                <Image
                  src={item.imageBefore}
                  alt={`After ${item.id}`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="pt-2 pb-6">
              <h5 className="text-[20px]">{item.title}</h5>
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
