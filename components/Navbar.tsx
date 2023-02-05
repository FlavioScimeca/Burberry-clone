import React, { useState } from 'react';
import {
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import { useSelector } from 'react-redux';
import ShowCategory from './ShowCategory';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  function handleSubNav() {
    setIsOpen(!isOpen);
  }
  const items = useSelector(selectBasketItems);
  return (
    <>
      <nav className=" grid grid-cols-2  md:grid-cols-5  py-5 px-2 bg-transparent shadow ">
        <div className="text-3xl font-bold col-span-1 px-5">
          <Link href="/">
            <h1>BURBERRY</h1>
          </Link>
        </div>
        <div className="hidden md:flex space-x-7 items-center col-span-3 mx-auto">
          <Link href="/perfumes" className="link">
            <p className="border-b-[0.8px] pb-1 border-black">Profumi</p>
          </Link>
          <Link href="/caps" className="link">
            <p className="border-b-[0.8px] pb-1 border-black">Cappelli</p>
          </Link>
          <Link href="/shirts" className="link">
            <p className="border-b-[0.8px] pb-1 border-black">Camicie</p>
          </Link>
          <Link href="/gloves" className="link">
            <p className="border-b-[0.8px] pb-1 border-black">Guanti</p>
          </Link>
        </div>
        <div className="flex justify-end items-center space-x-10 col-span-1 px-5">
          <Link href="/checkout">
            <div className="relative cursor-pointer">
              <ShoppingCartIcon className="h-8" />
              {items.length > 0 && (
                <span className="absolute flex justify-center items-center text-2xl font-semibold text-slate-800 -bottom-2 -right-4">
                  {items.length}
                </span>
              )}
            </div>
          </Link>
          <button onClick={() => handleSubNav()}>
            <MagnifyingGlassIcon className="h-8 md:hidden" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div>
          <div className="flex h-14 items-center mx-1 space-x-3 font-extralight justify-center border-b-[0.8px] border-zinc-500 pb-1 md:hidden">
            <Link href="/perfumes" className="link">
              Profumi
            </Link>
            <Link href="/caps" className="link">
              Cappelli
            </Link>
            <Link href="/shirts" className="link">
              Camicie
            </Link>
            <Link href="/gloves" className="link">
              Guanti
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
