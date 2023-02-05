import React from 'react';

interface Props {
  items: Product[];
}
const CardPayment = ({ items }: Props) => {
  return (
    <>
      <div className="p-10 bg-yellow-200 w-[450px] space-y-10">
        <div className="w-full flex justify-between  border-b-[0.8px] border-black pb-1">
          <p>Totale parziale</p>
          <p>$ {items.reduce((total, item) => total + item.price, 0)}</p>
        </div>
        <div className="w-full flex justify-between  border-b-[0.8px] border-black pb-1">
          <p>Costo spedizione</p>
          <p>Gratuita</p>
        </div>
        <div className="w-full flex justify-between  border-b-[0.8px] border-black pb-1">
          <p className=" font-semibold text-xl ">totale</p>
          <p className="font-semibold text-xl ">
            $ {items.reduce((total, item) => total + item.price, 0)}
          </p>
        </div>
        <div className="bg-black w-full py-5 cursor-pointer text-white font-semibold text-xl text-center">
          Acquista
        </div>
      </div>
    </>
  );
};

export default CardPayment;
