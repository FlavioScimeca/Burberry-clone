import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../redux/basketSlice';
import { urlFor } from '../sanity';

interface Props {
  items: Product[];
  id: string;
}

const CheckoutProduct = ({ items, id }: Props) => {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <main className="">
        <div className="">
          {/* start card */}
          <div className="w-full h-fit flex justify-start m-5  border-b-[0.8px]">
            <div className=" h-[350px] w-[350px] p-2 flex justify-between items-center ">
              <div className="relative h-full w-full ">
                <Image
                  alt=""
                  src={urlFor(items[0].image[0]).url()}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between py-10 pl-5">
              <div className="p-2 space-y-8 ">
                <p className="text-xl tracking-wider">{items[0].title}</p>
                <p className="text-xl tracking-wider">{items[0].color}</p>
                <p className="font-light tracking-wider">
                  Codice prodotto: {items[0]._id}
                </p>
              </div>
              <div>
                <p
                  onClick={removeItemFromBasket}
                  className=" inline cursor-pointer  border-b-2 border-black text-zinc-700 pb-1"
                >
                  Rimuovi
                </p>
              </div>
            </div>
            <div className="flex-grow flex justify-end items-end ">
              <p className="py-5 px-7 text-xl font-thin">$ {items[0].price}</p>
            </div>
          </div>
          {/* end card */}
        </div>
      </main>
    </>
  );
};

export default CheckoutProduct;
