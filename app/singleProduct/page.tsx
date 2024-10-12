import React from 'react';
import Image from 'next/image';

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
    <div className='bg-orange-200'>
      <div className="max-w-6xl mx-auto w-full p-6 pt-32 pb-16 ">
        <div className="flex flex-col  lg:flex-row gap-8 border border-orange-400 bg-orange-100 px-10 py-8  rounded-lg shadow-xl">
          {/* Left Side: Product Image */}
          <div className="flex-1">
            <Image
              src={searchParams.thumbnail}
              alt={searchParams.title}
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg "
            />

          </div>

          {/* Right Side: Product Info */}
          <div className="flex-1 space-y-4  px-10 py-6">
            <div className="space-y-2 pt-7 pb-5">
              <h1 className="text-[32px] mb-5 text-orange-700 font-bold">{searchParams.title}</h1>
              <div className="flex justify-between">
                <p className='text-black text-[22px] font-semibold mb-3 '>Price: ${searchParams.price} <span className='text-orange-700'>&nbsp; | &nbsp;</span> Discount: {searchParams.discountPercentage}%</p>
                {/* <p className="text-lg text-red-600 font-semibold"></p> */}
              </div>
              <div>
                <p className="text-gray-600">Category: {searchParams.category}  <span className='text-orange-700'>&nbsp; | &nbsp;</span>  Brand: {searchParams.brand}</p>
                {/* <p className="text-gray-600"></p> */}
              </div>
            </div>



            <div className="space-y-2 pt-8 border-t border-gray-300">
              <h2 className="text-2xl text-orange-700 font-semibold">Description:</h2>
              <p className="text-gray-600 ">{searchParams.description}</p>
              <p className="text-black text-lg font-medium ">Rating: <span className='text-yellow-500'>{searchParams.rating} Stars</span></p>
              <p className="text-black text-sm">
                {tags.map((tag: string) => `#${tag}`).join(' ')}
              </p>
            </div>
          </div>
        </div>



        <div className="flex  rounded-lg my-4 gap-3 ">
          {/* Left Side: Product Details */}
         
            <div className=" pt-5 border  border-orange-400 bg-orange-100 px-10 pb-8  rounded-lg shadow-xl w-[720px]">
              <h2 className="text-center text-3xl text-orange-700 font-semibold mb-12">Product Details</h2>
              <p className="text-black py-3 border-gray-300 border-t">Availability: {searchParams.availabilityStatus}</p>
              <p className="text-black border-t py-3 border-gray-300">Warranty: {searchParams.warrantyInformation}</p>
              <p className="text-black border-t py-3 border-gray-300">Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>
              <p className="text-black border-t py-3 border-gray-300">Weight: {searchParams.weight} kg</p>
              <p className="text-black border-t py-3 border-gray-300">Stock: {searchParams.stock}</p>
              <p className="text-black border-t py-3 border-gray-300">Min Order: {searchParams.minimumOrderQuantity}</p>
              <p className="text-black border-y py-3 border-gray-300">Return Policy: {searchParams.returnPolicy}</p>
            </div>
          

          {/* Right Side: Reviews */}
       
            <div className=" pt-5 border w-[400px]  border-orange-400 bg-orange-100 px-10 pb-8  rounded-lg shadow-xl ">
              <h2 className="text-center text-3xl text-orange-700 font-semibold mb-12">Reviews</h2>
              <div className="mt-4">
                {reviews.map((review: any, index: number) => (
                  <div key={index} className="border-b border-gray-300 py-3">
                    <p className="font-bold text-base">{review.reviewerName}</p>
                    <p className="text-gray-600 text-[10px] mb-3">{review.reviewerEmail}</p>
                    <p className='text-orange-600 text-lg font-bold italic text-center my-3 '>"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
        
        </div>







        {/* <div className="mt-8 p-4 border border-orange-300 bg-orange-50 px-10 py-8  rounded-lg shadow-xl ">
          <h2 className="text-center text-3xl text-orange-700 font-semibold mb-14">Product Details</h2>
          <p className="text-black   py-3">Availability: {searchParams.availabilityStatus}</p>

          <p className="text-black border-t py-3 border-gray-400">Warranty: {searchParams.warrantyInformation}</p>

          <p className="text-black border-t  py-3 border-gray-400">Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>

          <p className="text-black border-t  py-3 border-gray-400">Weight: {searchParams.weight} kg</p>

          <p className="text-black border-t  py-3 border-gray-400">Stock: {searchParams.stock}</p>

          <p className="text-black border-t  py-3 border-gray-400">Min Order: {searchParams.minimumOrderQuantity}</p>

          <p className="text-black border-t  py-3 border-gray-400">Return Policy: {searchParams.returnPolicy}</p>
        </div>


        <div className="mt-8 p-4  border flex  border-orange-300 bg-orange-50 px-10  py-8  rounded-lg shadow-xl">
          <h2 className="text-center text-3xl text-orange-700 font-semibold mb-14">Reviews</h2>
          <div className="mt-4">
            {reviews.map((review: any, index: number) => (
              <div key={index} className="border-b py-2">
                <p className="font-bold">{review.reviewerName}</p>
                <p className="text-gray-600">{review.reviewerEmail}</p>
                <p>{review.comment}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>

        </div> */}

      </div>
    </div>
  );








  // return (
  //   <div>
  //     <div>
  //       <div>
  //         <img
  //           src={searchParams.thumbnail}
  //           alt={searchParams.title}
  //         />
  //       </div>
  //       <div>
  //         <div>
  //           <h1>{searchParams.title}</h1>
  //           <div>
  //             <p>Price: ${searchParams.price}</p>
  //             <p>Discount: {searchParams.discountPercentage}%</p>
  //           </div>
  //           <div>
  //             <p>Category: {searchParams.category}</p>
  //             <p>Brand: {searchParams.brand}</p>
  //           </div>
  //         </div>
  //         <div>
  //           <h2>Description:</h2>
  //           <p>{searchParams.description}</p>
  //           <p>{tags.join(' | ')}</p>
  //         </div>
  //       </div>
  //     </div>

  //     <div>
  //       <h2>Product Details:</h2>
  //       <p>Availability: {searchParams.availabilityStatus}</p>
  //       <hr />
  //       <p>Warranty: {searchParams.warrantyInformation}</p>
  //       <hr />
  //       <p>Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>
  //       <hr />
  //       <p>Weight: {searchParams.weight} kg</p>
  //       <hr />
  //       <p>Stock: {searchParams.stock}</p>
  //       <hr />
  //       <p>Min Order: {searchParams.minimumOrderQuantity}</p>
  //       <hr />
  //       <p>Return Policy: {searchParams.returnPolicy}</p>
  //       <hr />
  //     </div>

  //     <div>
  //       <h2>Product Ratings & Reviews:</h2>
  //       <p>Rating: {searchParams.rating} stars</p>
  //       <div>
  //         <h3>Reviews:</h3>
  //         <p>
  //           {reviews.map((review: any, index: number) => (
  //             <div key={index} >
  //               <p>{review.reviewerName}</p>
  //               <p>{review.reviewerEmail}</p>
  //               <p>{review.comment}</p>
  //               <p>{review.date}</p>
  //             </div>
  //           ))}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default singleProduct








































// return (
//   <div className="max-w-6xl mx-auto p-6 pt-32 pb-24">
//     {/* Main Content */}
//     <div className="flex flex-col lg:flex-row gap-8 items-start">

//       {/* Left Side: Product Info */}
//       <div className="lg:w-1/2 space-y-4">
//         <h1 className="text-3xl font-bold">{searchParams.title}</h1>
//         <p className="text-gray-600">Category: {searchParams.category}</p>
//         <p className="text-gray-600">Price: ${searchParams.price}</p>
//         <p className="text-gray-600">Discount: {searchParams.discountPercentage}%</p>

//         <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-2">Product Details</h2>
//           <p className="text-gray-600">Availability: {searchParams.availabilityStatus}</p>
//           <p className="text-gray-600">Brand: {searchParams.brand}</p>
//           <p className="text-gray-600">Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>
//           <p className="text-gray-600">Weight: {searchParams.weight} kg</p>
//           <p className="text-gray-600">Warranty: {searchParams.warrantyInformation}</p>
//           <p className="text-gray-600">Min Order: {searchParams.minimumOrderQuantity}</p>
//           <p className="text-gray-600">Return Policy: {searchParams.returnPolicy}</p>
//           <p className="text-gray-600">Stock: {searchParams.stock}</p>
//         </div>

//         <p className="text-gray-600">Rating: {searchParams.rating} stars</p>

//         <div className="mt-4">
//           <h2 className="text-xl font-semibold">Tags</h2>
//           <p className="text-gray-600">{tags.join(' | ')}</p>
//         </div>
//       </div>

//       {/* Right Side: Product Image */}
//       <div className="lg:w-1/2">
//         <img
//           src={searchParams.thumbnail}
//           alt={searchParams.title}
//           className="w-full h-auto object-cover rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   </div>
// );






// return (
//   <div>
//     <div>
//       <div>
//         <h1>{searchParams.title}</h1>
//         <p>Category: {searchParams.category}</p>
//         <p>Price: ${searchParams.price}</p>
//         <p>Discount: {searchParams.discountPercentage}%</p>
//       </div>

//       <div>
//         <div>
//           <h2>Product Details</h2>
//         </div>
//         <div>
//           <p>Availability: {searchParams.availabilityStatus}</p>
//           <p>Brand: {searchParams.brand}</p>
//           <p>Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>
//           <p>Weight: {searchParams.weight} kg</p>
//           <p>Warranty Information: {searchParams.warrantyInformation}</p>
//           <p>Minimum Order Quantity: {searchParams.minimumOrderQuantity}</p>
//           <p>Return Policy: {searchParams.returnPolicy}</p>
//           <p>Stock: {searchParams.stock}</p>
//         </div>
//       </div>

//       <div>
//         <p>Rating: {searchParams.rating} stars</p>
//       </div>

//       <div>
//         <h2>Tags</h2>
//         <p>{tags.join(' | ')}</p>
//       </div>
//     </div>

//     <div>
//       <div>
//         <img
//           src={searchParams.thumbnail}
//           alt={searchParams.title}
//         />
//       </div>
//     </div>
//   </div>
// );






{/* <div>
          <h2>Reviews</h2>
          <div>
            {reviews.map((review: any, index: number) => (
              <div key={index}>
                <p>{review.reviewerName}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div> */}



// return (
//   <div className="p-6 max-w-7xl mx-auto">
//     {/* Main Container */}
//     <div className="flex flex-col lg:flex-row items-center gap-8 lg:items-start">

//       {/* Text Section */}
//       <div className="lg:w-1/2">
//         <h1 className="text-3xl font-bold mb-4">{searchParams.title}</h1>
//         <p className="text-gray-700 mb-2">Category: {searchParams.category}</p>
//         <p className="text-gray-700 mb-2">Price: ${searchParams.price}</p>
//         <p className="text-gray-700 mb-2">Discount: {searchParams.discountPercentage}%</p>
//         <p className="text-gray-700 mb-2">Availability: {searchParams.availabilityStatus}</p>
//         <p className="text-gray-700 mb-2">Brand: {searchParams.brand}</p>
//         <p className="text-gray-700 mb-2">Rating: {searchParams.rating} stars</p>
//         <p className="text-gray-700 mb-2">Stock: {searchParams.stock}</p>
//       </div>


//     </div>

//     {/* Product Details Section */}
//     <div className="mt-10">
//       <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
//       <p className="text-gray-700">Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>
//       <p className="text-gray-700">Weight: {searchParams.weight} kg</p>
//       <p className="text-gray-700">Warranty Information: {searchParams.warrantyInformation}</p>
//       <p className="text-gray-700">Minimum Order Quantity: {searchParams.minimumOrderQuantity}</p>
//       <p className="text-gray-700">Return Policy: {searchParams.returnPolicy}</p>
//     </div>

//     {/* Tags Section */}
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-2">Tags</h2>
//       <p className="text-gray-600">{tags.join(' | ')}</p>
//     </div>

//     {/* Reviews Section */}
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Reviews</h2>
//       <div className="space-y-4">
//         {reviews.map((review: any, index: number) => (
//           <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
//             <p className="font-bold">{review.reviewerName}</p>
//             <p className="text-gray-600">{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Additional Image Section */}
//     <div className="mt-10 lg:w-1/2 mx-auto">
//       <img
//         src={searchParams.thumbnail}
//         alt={searchParams.title}
//         className="w-full h-auto object-cover rounded-lg shadow-lg"
//       />
//     </div>
//   </div>
// );











// return (
//   <div className="p-6">
//     {/* Main Container */}
//     <div className="flex flex-col lg:flex-row items-center gap-6 lg:items-start">
//       {/* Text Section */}
//       <div className="lg:w-1/2">
//         <h1 className="text-2xl font-bold mb-2">{searchParams.title}</h1>
//         <p className="text-gray-600 mb-1">Category: {searchParams.category}</p>
//         <p className="text-gray-600 mb-1">Price: ${searchParams.price}</p>
//         <p className="text-gray-600 mb-1">Discount: {searchParams.discountPercentage}%</p>
//         <p className="text-gray-600 mb-1">Availability: {searchParams.availabilityStatus}</p>
//         <p className="text-gray-600 mb-1">Brand: {searchParams.brand}</p>
//         <p className="text-gray-600 mb-1">Rating: {searchParams.rating} stars</p>
//         <p className="text-gray-600 mb-1">Stock: {searchParams.stock}</p>
//       </div>

//       {/* Image Section */}
//       <div className="lg:w-1/2">
//         <img
//           src={searchParams.thumbnail}
//           alt={searchParams.title}
//           className="w-full h-auto object-cover rounded-lg shadow-lg"
//         />
//       </div>
//     </div>

//     {/* Product Details Section */}
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-2">Product Details</h2>
//       <p className="text-gray-600">Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>
//       <p className="text-gray-600">Weight: {searchParams.weight} kg</p>
//       <p className="text-gray-600">Warranty Information: {searchParams.warrantyInformation}</p>
//       <p className="text-gray-600">Minimum Order Quantity: {searchParams.minimumOrderQuantity}</p>
//       <p className="text-gray-600">Return Policy: {searchParams.returnPolicy}</p>
//     </div>

//     {/* Tags Section */}
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-2">Tags</h2>
//       <p className="text-gray-600">{tags.join(' | ')}</p>
//     </div>

//     {/* Reviews Section */}
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Reviews</h2>
//       <div className="space-y-4">
//         {reviews.map((review: any, index: number) => (
//           <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
//             <p className="font-bold">{review.reviewerName}</p>
//             <p className="text-gray-600">{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//        {/* Image Section */}
//        <div className="lg:w-1/2">
//         <img
//           src={searchParams.thumbnail}
//           alt={searchParams.title}
//           className="w-full h-auto object-cover rounded-lg shadow-lg"
//         />
//       </div>
//   </div>
// );







// return (
//   <div>
//     <div>
//       <div >
//         <h1>{searchParams.title}</h1>
//         <p >{searchParams.category}</p>
//         <p >${searchParams.price}</p>
//         <p >Discount: {searchParams.discountPercentage}%</p>
//         <p >Availability: {searchParams.availabilityStatus}</p>
//         <p >Brand: {searchParams.brand}</p>
//         <p >Rating: {searchParams.rating} stars</p>
//         <p >Stock: {searchParams.stock}</p>
//       </div>

//       <div>
//         <img src={searchParams.thumbnail} alt={searchParams.title}  />
//       </div>
//     </div>

//     <div>
//       <h2>Product Details</h2>
//       <p >Dimensions: {dimensions.height} x {dimensions.width} x {dimensions.depth} cm</p>
//       <p >Weight: {searchParams.weight} kg</p>
//       <p >Warranty Information: {searchParams.warrantyInformation}</p>
//       <p >Minimum Order Quantity: {searchParams.minimumOrderQuantity}</p>
//       <p >Return Policy: {searchParams.returnPolicy}</p>
//     </div>

//     <div>
//       <h2>Tags</h2>
//       <p>{tags.join(' | ')}</p>
//     </div>

//     <div>
//       <h2 >Reviews</h2>
//       <div>
//         {reviews.map((review: any, index: number) => (
//           <div key={index} >
//             <p>{review.reviewerName}</p>
//             <p>{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );