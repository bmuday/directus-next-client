"use client";
import { assetsURL } from "@/utils";

export default function Product({ product }) {
  const { name, image, price } = product;
  return (
    <div
      className=" flex flex-col m-5 ml-2 mr-2 shadow-md ring-4 ring-transparent
                  transition-all duration-300 hover:ring-pink-500 
                  cursor-pointer hover:scale-105 rounded-md bg-zinc-900/80
                  before:bg-gradient-to-r before:from-transparent before:via-white/10 "
      onClick={() => alert("Buying: " + name)}
    >
      <img
        className="h-44 rounded-t-md"
        src={`${assetsURL}/${image}`}
        alt={name}
      />
      <div className="flex flex-col pl-3 pr-3 pb-4 pt-5">
        <h4 className="text-white font-semibold text-xl">{name}</h4>
        <span className="text-pink-600 text-lg font-semibold">${price}</span>
      </div>
    </div>
  );
}
