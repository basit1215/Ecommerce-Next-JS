import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

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

const Products = async() => {

    const data = await fetch('https://dummyjson.com/products')
    const res = await data.json()  
     console.log(res)
    const products = await res.products
    console.log(products)
 

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6">Hello World</h1>
          {products.map((item: Product) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
             
              <Image src={item.thumbnail}
                alt={item.title}
                width={300}
                height={300}
                priority={true}  
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <p className="text-gray-700 mb-1">Title: {item.title}</p>
              <p className="text-gray-700 mb-1">Category: {item.category}</p>
              <p className="text-gray-700 mb-1">Price: ${item.price}</p>
              <p className="text-gray-700 mb-1">Discount: {item.discountPercentage}%</p>
              <button ><Link href={{
                pathname: "singleProduct",
                query:{
                    title:                item.title,
                    category:             item.category,
                    price:                item.price,
                    discountPercentage:   item.discountPercentage,
                    thumbnail:            item.thumbnail,
                    availabilityStatus:   item.availabilityStatus,
                    brand:                item.brand,
                    rating:               item.rating,
                    id:                   item.id,
                    returnPolicy:         item.returnPolicy,
                    stock:                item.stock,
                    warrantyInformation:  item.warrantyInformation,
                    weight:               item.weight,
                    minimumOrderQuantity: item.minimumOrderQuantity,
                    dimensions:           JSON.stringify(item.dimensions),
                    reviews:              JSON.stringify(item.reviews),
                    tags:                 JSON.stringify(item.tags),
                }
              }}>Check Details</Link></button>
            </div>
          ))}
       
    </>
  );
}

export default Products;






{/* <h2 className="text-lg font-semibold mb-2">ID: {item.id}</h2>
              <p className="text-gray-700 mb-1">Availability: {item.availabilityStatus}</p>
              <p className="text-gray-700 mb-1">Brand: {item.brand}</p> */}
              {/* <p className="text-gray-700 mb-1">Minimum Order: {item.minimumOrderQuantity}</p> */}
              {/* <p className="text-gray-700 mb-1">Rating: {item.rating}</p> */}
              {/* <p className="text-gray-700 mb-1">Return Policy: {item.returnPolicy}</p> */}
              {/* <p className="text-gray-700 mb-1">Warranty: {item.warrantyInformation}</p>
              <p className="text-gray-700 mb-1">Weight: {item.weight} kg</p> */}
              {/* <p className="text-gray-700 mb-1">Description: {item.description}</p> */}
              {/* <img src={item.thumbnail} alt={item.title} className="w-full h-32 object-cover rounded-md mb-4" /> */}
              {/* Reviews Section */}
              {/* <h3 className="text-md font-bold mt-4 mb-2">Reviews:</h3>
              <ul className="list-disc ml-5">
                {item.reviews.map((review, index) => (
                  <li key={index} className="text-gray-700">
                    Reviewer: {review.reviewerName} - {review.reviewerEmail} <br />
                    Comment: {review.comment} <br />
                    Date: {review.date} <br />
                    Rating: {review.rating}/5
                  </li>
                ))}
              </ul> */}

              {/* Tags Section */}
              {/* <h3 className="text-md font-bold mt-4 mb-2">Tags:</h3>
              <ul className="list-disc ml-5">
                {item.tags.length > 0 ? (
                  item.tags.map((tag, index) => (
                    <li key={index} className="text-gray-700">
                      {tag}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-700">No tags available</li>
                )}
              </ul> */}

              {/* <h3>Tags:</h3>
              <ul>
                <li>
                  {item.tags[1]}
                </li>
              </ul> */}

              {/* Dimensions Section */}
              {/* <h3 className="text-md font-bold mt-4 mb-2">Dimensions:</h3>
              <ul className="list-disc ml-5">
                <li className="text-gray-700">
                  Depth: {item.dimensions.depth} cm, Height: {item.dimensions.height} cm, Width: {item.dimensions.width} cm
                </li>
              </ul> */}