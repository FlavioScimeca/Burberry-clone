import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlFor } from '../sanity';

interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  return (
    <>
      <main className="py-5">
        <Link href={`product/${product._id}`}>
          <div className="flex flex-col justify-center items-center w-full h-[450px] md:h-[650px] select-none space-y-3">
            <div className="relative h-full w-full">
              <Image
                alt={`${product.title}`}
                src={urlFor(product.image[0]).url()}
                layout="fill"
                objectFit="fill"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-3 text-xl">
              <p className="text-xl font-semibold px-2 tracking-wider text-center">
                {product.title}
              </p>
              <p>$ {product.price}</p>
            </div>
          </div>
        </Link>
      </main>
    </>
  );
};

export default Product;
