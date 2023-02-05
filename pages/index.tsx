import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import LandingProduct from '../components/LandingProduct';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';

interface Props {
  categories: Category[];
  products: Product[];
}

const Home = ({ categories, products }: Props) => {
  console.log(categories);
  // console.log(products);
  const showProducts = (category: number) => {
    return products.filter(
      (product) => product.category._ref == categories[category]._id
    );
  };
  return (
    <div>
      <Head>
        <title>Burberry | Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="flex justify-center items-center h-[400px] ">
          <h1 className="text-5xl font-extrabold border-b-[5px] pb-10 border-black">
            BURBERRY
          </h1>
        </div>
        <div>
          {showProducts(4).map((product) => (
            <LandingProduct key={product._id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

//back-end
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
