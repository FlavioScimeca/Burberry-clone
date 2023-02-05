import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import Link from 'next/link';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

interface Props {
  categories: Category[];
  products: Product[];
}

const Gloves = ({ products, categories }: Props) => {
  const router = useRouter();
  const checkUrl = () => {
    let a = 0;

    if (router.pathname == '/perfumes') {
      a = 3;
    }

    return a;
  };

  const showProducts = (category: number) => {
    return products.filter(
      (product) => product.category._ref == categories[category]._id
    );
  };
  const nameCategory = (category: number) => {
    return categories[category].title;
  };
  return (
    <>
      <Navbar />
      <main className="">
        <section className="h-[350px] border-b-[0.5px] border-black">
          {/* header */}
          <div className="flex flex-col h-full justify-center items-center space-y-10">
            <h2 className="text-3xl font-semibold uppercase">
              "{nameCategory(checkUrl())}"
            </h2>
            <div className="flex w-full justify-center gap-10">
              <div>
                <p className="text-xl tracking-widest font-medium">
                  {showProducts(checkUrl()).length} Risultati
                </p>
              </div>
              <div>
                <button onClick={() => router.back()}>
                  <p className="text-xl tracking-widest font-medium border-b-[0.8px] border-black">
                    Torna indietro
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* products */}
        <div className="grid grid-cols-2 md:grid-cols-4  my-5">
          {showProducts(checkUrl()).map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gloves;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return {
    props: {
      categories,
      products,
    },
  };
};
