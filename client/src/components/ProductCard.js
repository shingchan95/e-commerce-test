import React, { useEffect } from 'react';

function ProductCards({ products }) {
    useEffect(() => {
        console.log('Fetched products:', products);
    }, [products]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                products.map((product) => (
                    <div key={product.id} className="p-4 bg-white shadow-md cursor-pointer hover:opacity-60">
                        {product.price?.isOnPromotion && (
                            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 absolute">
                                Sale
                            </span>
                        )}
                        {product.attributes.isBestSeller && (
                            <div className="bg-yellow-500 text-white font-bold text-center text-xs py-1 absolute right-8">
                                Best Seller
                            </div>
                        )}
                        <img
                            src={product.image.url}
                            alt={product.image.attribute}
                            className="w-full h-34"
                        />
                        {product.brand?.brandImage?.url && (
                            <img
                                src={product.brand.brandImage.url}
                                alt={product.brand.brandImage.attributes?.imageAltText}
                                className="w-16 h-auto mb-2 mx-auto"
                            />
                        )}

                        <h3 className="font-semibold">{product.productName}</h3>
                        <div className="flex items-center space-x-2">
                            {product.price?.isOnPromotion ? (
                                <>
                                    <span className="line-through ">
                                        £{product.price.wasPriceIncTax}
                                    </span>
                                    <span className="font-bold text-red-600">
                                        £{product.price.priceIncTax}
                                    </span>
                                </>
                            ) :
                                <span>
                                    £{product.price.priceIncTax}
                                </span>
                            }
                        </div>
                        <div className="text-sm">
                            {product.stockStatus?.status === "G" ? "In Stock" : "Out of Stock"}
                        </div>
                        <div className="text-sm mt-2">
                            {product.averageRating} Stars ({product.reviewsCount} reviews)
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductCards;