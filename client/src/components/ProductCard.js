import React from 'react';

function ProductCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="p-4 bg-white shadow-md hover:scale-110">
                        <img
                            src="https://images.victorianplumbing.co.uk/products/metro-modern-close-coupled-toilet-with-soft-close-seat/mainimages/metcc_l2.webp?origin=metcc_l2.png&w=675"
                            alt="Product Image"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <h3 className="font-semibold text-lg">Toilets</h3>
                        <p className="text-gray-700">£100</p>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductCards;