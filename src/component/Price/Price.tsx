import React from "react";
import { price } from "../../constant/constant";
import style from "./Price.module.scss"

function Price() {
  return (
    <table className="w-full">
      <thead className="text-left">
        <tr className=" border-b-1">
          <th className="w-10/12 p-6">Наименование услуги</th>
          <th className="w-2/12 p-6">Цена</th>
        </tr>
      </thead>
      <tbody>
        {price.map((item) => {
          return (
            <tr key={item.name} className={style.price__item}>
              <td className="w-10/12 p-6">{item.name}</td>
              <td className="w-2/12 p-6">{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Price;
