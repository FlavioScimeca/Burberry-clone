import { useRouter } from 'next/router';
import Link from 'next/link';
import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchProducts } from '../../utils/fetchProducts';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import Navbar from '../../components/Navbar';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/basketSlice';
import Footer from '../../components/Footer';
import toast from 'react-hot-toast';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface Props {
  products: Product[];
}
const productscreen = ({ products }: Props) => {
  const router = useRouter();
  const { query } = useRouter();
  const { _id } = query;
  const product = products.find((x) => x._id == _id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
    toast.success('Articolo aggiunto.', {
      style: {
        border: '1px solid #98928F',
        padding: '20px',
        color: '#98928F',
      },
      iconTheme: {
        primary: '#98928F',
        secondary: '#FFFAEE',
      },
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="grid grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <div className="grid grid-rows-1 h-fit p-0">
              <div className="relative h-[900px] w-full p-0 m-0">
                <button
                  className="p-5 relative z-10"
                  onClick={() => router.back()}
                >
                  <ArrowLeftIcon className="h-12 w-12" />
                </button>
                <Image
                  alt="ciaooo"
                  src={urlFor(product.image[0]).url()}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[900px] w-full">
                <Image
                  alt="ciaooo"
                  src={urlFor(product.image[1]).url()}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[900px] w-full">
                <Image
                  alt="ciaooo"
                  src={urlFor(product.image[2]).url()}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            {/* start paragraph */}
            <div className=" sticky -top-48  p-10">
              {/* title & price */}
              <div className="py-8  space-y-8 border-b-[0.8px] border-gray-400 ">
                <p className="font-semibold text-2xl ">{product.title}</p>
                <p className=" text-xl">$ {product.price}</p>
              </div>
              {/* color */}
              <div className="flex items-center space-x-5 border-b-[0.8px] border-gray-400 py-7">
                <p className="font-medium  text-xl ">COLORE: </p>
                <p className="text-lg  ">{product.color}</p>
              </div>
              {/* info shipment */}
              <div className="my-7">
                <p className=" font-medium ">
                  Spedizioni e restituzioni gratuite
                  <Link
                    className="mx-5 text-gray-600 pb-1 border-b-[0.8px] border-black"
                    href=""
                  >
                    Maggiori dettagli
                  </Link>
                </p>
              </div>
              {/* purchase button */}
              <div
                className=" bg-black cursor-pointer text-center font-bold text-xl py-5 mb-5 text-white"
                onClick={addItemToBasket}
              >
                Aggiungi
              </div>
              {/* info section */}
              <div className="space-y-7 mb-10 border-b-[0.8px] border-gray-400 pb-12">
                <div className="flex flex-col">
                  <div>
                    <p className="border-b-[0.8px] border-black inline font-medium">
                      Trova in butique
                    </p>
                  </div>
                  <p>
                    Trova questo articolo nella boutique Burberry più vicina.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="">
                    <p className="border-b-[0.8px] border-black inline font-medium">
                      Prenota un appuntamento
                    </p>
                  </div>
                  <p>
                    Appuntamento in boutique, virtuale o post-vendita, a seconda
                    del Paese.
                  </p>
                </div>
              </div>
              {/* description */}
              <div className="">
                <p className="font-semibold mb-10 ">Dettaglio prodotto</p>
                <p className=" text-xl tracking-wider">
                  {product.description[0].children[0].text}
                </p>
                <div className="mt-8 flex space-x-8">
                  <p className="border-black border-b-[0.8px] inline ">
                    Ulteriori dettagli
                  </p>
                  <p className="border-black border-b-[0.8px] inline">
                    Contattaci
                  </p>
                </div>
              </div>
            </div>
            {/* end paragraph */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default productscreen;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
};
