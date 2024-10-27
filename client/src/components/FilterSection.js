import React from 'react';

function FilterSection({ setQuery }) {
    const categories = ['toilets', 'baths/corner-baths'];
    return (
        <div>
            <h3 className="font-bold mb-4">Filter by Category</h3>
            <div className="mb-4">
                {/* render button for each category  */}
                {categories.map((category) => (
                    <button
                        key={category}
                        className="block mb-2"
                        onClick={() => setQuery(category)}
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