import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";

const singleProduct = ({ searchParams }: {
  searchParams: {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    availabilityStatus: string;
    brand: string;
    rating: number;
    returnPolicy: string;
    stock: number;
    warrantyInformation: string;
    weight: number;
    minimumOrderQuantity: number;
    dimensions: string;
    reviews: string;
    tags: string;
  }
}) => {

  const dimensions = JSON.parse(searchParams.dimensions);
  const reviews = JSON.parse(searchParams.reviews);
  const tags = JSON.parse(searchParams.tags);


  return (
    <div className='bg-orange-200 flex'>

      <div className='pt-[76px] pl-4'>
        <Link href='/' className="flex items-center justify-center fixed text-center   h-14 w-14 bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out cursor-pointer">
          <IoIosArrowBack className="text-orange-200 text-3xl" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto w-full p-6 pt-32 pb-16 ">
        <div className="flex flex-col  lg:flex-row gap-8 border border-orange-400 bg-orange-100 px-10 py-8  rounded-lg shadow-xl">

          <div className="flex-1">
            <Image
              src={searchParams.thumbnail}
              alt={searchParams.title}
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg "
            />
          </div>

          <div className="flex-1 space-y-4  px-10 py-6">
            <div className="space-y-2 pt-7 pb-5">
              <h1 className="text-[32px] mb-5 text-orange-700 font-bold">{searchParams.title}</h1>
              <div className="flex justify-between">
                <div className='text-black text-[22px] font-semibold mb-3 flex gap-3'>
                  <p>Price: ${searchParams.price} </p>
                  <p> | </p>
                  <p className='text-red-500 font-bold'> Discount: {searchParams.discountPercentage}%</p></div>
              </div>
              <div>
                <p className="text-gray-600">Category: {searchParams.category} &nbsp; | &nbsp; Brand: {searchParams.brand}</p>
              </div>
            </div>

            <div className="space-y-2 pt-8 border-t border-gray-300">
              <h2 className="text-2xl text-orange-700 font-semibold">Description:</h2>
              <p className="text-gray-600 ">{searchParams.description}</p>
              <div className='flex gap-2'>
                <p className="text-black text-lg font-medium ">Rating:</p>
                <p className='text-yellow-500 text-lg font-medium'>{searchParams.rating} Stars</p>
              </div>
              <p className="text-black text-sm">
                {tags.map((tag: string) => `#${tag}`).join(' ')}
              </p>
            </div>
          </div>
        </div>

        <div className="flex  rounded-lg my-4 gap-3 ">
          <div className=" pt-5 border  border-orange-400 bg-orange-100 px-10 pb-8  rounded-lg shadow-xl w-[560px]">
            <h2 className="text-center text-3xl text-orange-700 font-semibold mb-12">Product Details</h2>
            <div className="text-black py-3 border-gray-300 border-t flex justify-between font-semibold"> <div>Availability:</div> <div >{searchParams.availabilityStatus}</div></div>
            <div className="text-black border-t py-3 border-gray-300 flex justify-between font-semibold"><div>Warranty: </div><div>{searchParams.warrantyInformation}</div></div>
            <div className="text-black border-t py-3 border-gray-300 flex justify-between font-semibold"><div>Dimensions:</div> <div>{dimensions.height} x {dimensions.width} x {dimensions.depth} cm</div></div>
            <div className="text-black border-t py-3 border-gray-300 flex justify-between font-semibold"><div>Weight: </div><div>{searchParams.weight} kg</div></div>
            <div className="text-black border-t py-3 border-gray-300 flex justify-between font-semibold"><div>Stock: </div><div>{searchParams.stock}</div></div>
            <div className="text-black border-t py-3 border-gray-300 flex justify-between font-semibold"><div>Min Order:</div><div> {searchParams.minimumOrderQuantity}</div></div>
            <div className="text-black border-y py-3 border-gray-300 flex justify-between font-semibold"><div>Return Policy:</div><div> {searchParams.returnPolicy}</div></div>
          </div>

          <div className=" pt-5 border w-[560px]  border-orange-400 bg-orange-100 px-10 pb-8  rounded-lg shadow-xl ">
            <h2 className="text-center text-3xl text-orange-700 font-semibold mb-12">Reviews</h2>
            <div className="mt-4">
              {reviews.map((review: any, index: number) => (
                <div key={index} className="border-b border-t border-gray-300 py-3">
                  <p className="font-bold text-base">{review.reviewerName}</p>
                  <p className="text-gray-600 text-[10px] mb-3">{review.reviewerEmail}</p>
                  <p className='text-orange-600 text-lg font-bold italic text-center my-3 '>"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default singleProduct