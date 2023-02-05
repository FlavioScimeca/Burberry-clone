import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import { useRouter } from 'next/router';
import CheckoutProduct from '../components/CheckoutProduct';
import Link from 'next/link';
import CardPayment from '../components/CardPayment';
import Footer from '../components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const checkout = () => {
  const [loading, setLoading] = useState(false);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  console.log(items);
  return (
    <>
      <Navbar />
      <button className="p-5" onClick={() => router.back()}>
        <ArrowLeftIcon className="h-12 w-12" />
      </button>
      <main className="w-full flex justify-between">
        {items.length > 0 && (
          <div className="grid grid-cols-5">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <div className="col-span-5 md:col-span-3">
                <CheckoutProduct key={key} items={items} id={key} />
              </div>
            ))}
            <div className="col-span-5 md:col-span-2 flex justify-center items-center">
              <CardPayment items={items} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default checkout;
