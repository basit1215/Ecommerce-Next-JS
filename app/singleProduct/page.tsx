// import React from 'react'

// const singleProduct = ({ searchParams }: {
//   searchParams: {
//     id: number;
//     title: string;
//     category: string;
//     price: number;
//     discountPercentage: number;
//     thumbnail: string;
//     availabilityStatus: string;
//     brand: string;
//     rating: number;
//     returnPolicy: string;
//     stock: number;
//     warrantyInformation: string;
//     weight: number;
//     minimumOrderQuantity: number;
//     dimensions: string;
//     reviews: string;
//     tags: string;
//   }
// }) => {

//   const dimensions = JSON.parse(searchParams.dimensions)
//   const reviews = JSON.parse(searchParams.reviews)
//   const tags = JSON.parse(searchParams.tags)
//   console.log(tags); // Check if this is an array

//   return (
//     <>
//     <div>
//       <p>{searchParams.title}</p>
//       <p>{searchParams.category}</p>
//       <p>{searchParams.price}</p>
//       <p>{searchParams.discountPercentage}</p>
//       <p>{searchParams.availabilityStatus}</p>
//       <p>{searchParams.id}</p>
//       <p>{searchParams.returnPolicy}</p>
//       <p>{searchParams.brand}</p>
//       <p>{searchParams.rating}</p>
//       <p>{searchParams.stock}</p>
//       <p>{searchParams.weight}</p>
//       <p>{searchParams.minimumOrderQuantity}</p>
//       <p>{searchParams.warrantyInformation}</p>

//       <p>Dimensions: <br />
//         {dimensions.height} <br />
//         {dimensions.width} <br />
//         {dimensions.depth} <br />
//       </p>
      
//        <p>Tags: <br />
//         {tags.join(' | ')}
//       </p>

//       <p>Reviews: </p>
//       {reviews.map((review: any, index: number) => (
//         <div key={index}>
//           <p>{review.comment} by {review.reviewerName}</p>
//         </div>
//       ))}

     

// </div>
//     </>
//   )
// }

// export default singleProduct









import React from 'react';

const singleProduct = ({ searchParams }: {
  searchParams: {
    id: number;
    title: string;
    category: string;
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
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="order-2 lg:order-1">
          <h1 className="text-2xl font-bold mb-2">{searchParams.title}</h1>
          <p className="text-sm text-gray-600 mb-4">{searchParams.category}</p>
          <p className="text-xl text-green-500 font-semibold mb-1">${searchParams.price}</p>
          <p className="text-sm text-red-500 mb-2">Discount: {searchParams.discountPercentage}%</p>
          <p className="text-sm mb-1">Availability: {searchParams.availabilityStatus}</p>
          <p className="text-sm mb-1">Brand: {searchParams.brand}</p>
          <p className="text-sm mb-1">Rating: {searchParams.rating} stars</p>
          <p className="text-sm mb-1">Stock: {searchParams.stock}</p>
        </div>

        <div className="order-1 lg:order-2">
          <img src={searchParams.thumbnail} alt={searchParams.title} className="w-full h-auto max-h-80 object-cover rounded-lg" />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Product Details</h2>
        <p className="mt-2">Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>
        <p className="mt-2">Weight: {searchParams.weight} kg</p>
        <p className="mt-2">Warranty Information: {searchParams.warrantyInformation}</p>
        <p className="mt-2">Minimum Order Quantity: {searchParams.minimumOrderQuantity}</p>
        <p className="mt-2">Return Policy: {searchParams.returnPolicy}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Tags</h2>
        <p className="mt-2 text-sm text-gray-700">{tags.join(' | ')}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="max-h-64 overflow-y-auto border-t border-gray-300 mt-2">
          {reviews.map((review: any, index: number) => (
            <div key={index} className="p-2 border-b border-gray-200">
              <p className="font-semibold">{review.reviewerName}</p>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default singleProduct;





















// // "use client"

// // import axios from 'axios'
// import { useParams } from 'next/navigation'

//   const [singleData, setSingleData] = useState<any>([]);

// const {id} = useParams()
//   useEffect(() => {
// const data = await fetch(`https://dummyjson.com/products/${id}`)
// const res = await data.json()
// const singleProduct = res.data
// console.log(res);
//       .then(res => {
//         console.log(res.data);
//         setSingleData(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);





