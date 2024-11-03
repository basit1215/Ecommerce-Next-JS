import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

interface Dimensions {

  depth: number;
  height: number;
  width: number;

}

interface Reviews {

  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;

}

interface Product {

  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  minimumOrderQuantity: number;
  returnPolicy: string;
  price: number;
  rating: number;
  title: string;
  thumbnail: string;
  stock: number;
  warrantyInformation: string;
  weight: number;
  dimensions: Dimensions;
  reviews: Reviews[];
  tags: string[];

}

const Products = async () => {

  const data = await fetch('https://dummyjson.com/products')
  const res = await data.json()
  console.log(res)
  const products = await res.products
  console.log(products)

  return (
    <div className='bg-orange-200 pb-24'>

      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h2 className='text-center text-orange-700 text-5xl mt-[20px] pt-[90px] font-bold'>Welcome to my Store!</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 pt-16 ">
        {products.map((item: Product) => (
          <div
            key={item.id}
            className="bg-orange-100 shadow-lg rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >

            <Image
              src={item.thumbnail}
              alt={item.title}
              width={300}
              height={300}
              priority={true}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />

            <div className="px-2 pt-5 pb-2 ">
              <p className="text-gray-900 text-xl font-bold mb-3 mt-4">{item.title}</p>
              <p className="text-gray-700 text-lg font-semibold mb-1">Price: ${item.price}</p>
              <div className='mb-1 flex gap-2'>
                <p>Discount:</p>
                <p className='text-red-500  font-semibold'> {item.discountPercentage}%</p>
              </div>
              <div className='mb-1 flex gap-2'>
                <p>Rating:</p>
                <p className=' text-yellow-500 font-semibold'>{item.rating} Stars </p>
              </div>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                <Link
                  href={{
                    pathname: "singleProduct",
                    query: {
                      title: item.title,
                      category: item.category,
                      price: item.price,
                      discountPercentage: item.discountPercentage,
                      thumbnail: item.thumbnail,
                      availabilityStatus: item.availabilityStatus,
                      brand: item.brand,
                      description: item.description,
                      rating: item.rating,
                      id: item.id,
                      returnPolicy: item.returnPolicy,
                      stock: item.stock,
                      warrantyInformation: item.warrantyInformation,
                      weight: item.weight,
                      minimumOrderQuantity: item.minimumOrderQuantity,
                      dimensions: JSON.stringify(item.dimensions),
                      reviews: JSON.stringify(item.reviews),
                      tags: JSON.stringify(item.tags),
                    },
                  }}
                >
                  Check Details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Products