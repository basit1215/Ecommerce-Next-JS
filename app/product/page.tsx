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

const Products = async () => {

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
                        query: {
                            title: item.title,
                            category: item.category,
                            price: item.price,
                            discountPercentage: item.discountPercentage,
                            thumbnail: item.thumbnail,
                            availabilityStatus: item.availabilityStatus,
                            brand: item.brand,
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
                        }
                    }}>Check Details</Link></button>

                </div>
            ))}
        </>
    );
}

export default Products