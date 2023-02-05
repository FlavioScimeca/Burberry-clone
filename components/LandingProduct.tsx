import Image from 'next/image';
import React from 'react';
import { urlFor } from '../sanity';
import Footer from './Footer';

interface Props {
  product: Product;
  key: string;
}
const LandingProduct = ({ product, key }: Props) => {
  return (
    <div className="mb-40">
      <div className="grid grid-cols-3 h-screen w-full mt-10 ">
        <div className="mx-10 flex flex-col my-6 h-[500px] bg-top col-span-3 md:col-span-1">
          <div className=" relative h-full w-full">
            <Image
              alt={`${product.title}`}
              src={urlFor(product.image[1]).url()}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
          <p className="text-xl font-semibold text-center mt-10">
            GIACCHE E CAPPOTTI DA UOMO
          </p>
        </div>
        <div className="flex flex-col my-6 h-[500px] bg-top col-span-3 mt-28 md:col-span-1">
          <div className=" relative h-full w-full">
            <Image
              alt={`${product.title}`}
              src={urlFor(product.image[0]).url()}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <p className="text-xl font-semibold text-center mt-10">
            COLLEZIONE DONNA
          </p>
        </div>
        <div className="hidden md:flex flex-col my-6 h-[500px] bg-top col-span-1 mt-48">
          <div className=" relative h-full w-full">
            <Image
              alt={`${product.title}`}
              src={urlFor(product.image[3]).url()}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
          <p className="text-xl font-semibold text-center mt-10">
            COLLEZIONE 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingProduct;
