import React, { useState } from 'react';

function FilterSection({ setQuery }) {
    const categories = ['toilets', 'baths/corner-baths'];
    const [selectedCategory, setSelectedCategory] = useState('toilets');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setQuery(category);
    };
    return (
        <div>
            <h3 className="font-bold mb-4">Filter by Category</h3>
            <div className="mb-4">
                {/* render button for each category  */}
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`block w-full p-2 text-left border rounded-lg hover:bg-gray-100 ${selectedCategory === category && 'bg-gray-300'}`}
                    >
                        {/* capitalise the first letter on each category name */}
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FilterSection;