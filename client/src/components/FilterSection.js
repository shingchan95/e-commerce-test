import React, { useState } from 'react';

function FilterSection({ setQuery, facets }) {
    const categories = ['toilets', 'baths/corner-baths'];
    const [selectedCategory, setSelectedCategory] = useState('toilets');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setQuery(category);
    };
    return (
        <div>
            <h3 className="font-bold mb-4">Filter</h3>
            <div className="mb-4">
                {/* collapsible categories section */}
                <details className="collapse mb-2">
                    <summary className="bg-base-200 collapse-title px-6">
                        <div className='flex justify-between'>
                            <span>Categories</span>
                            <span className="self-end">&#x2b;</span>
                        </div>
                    </summary>
                    <div className="collapse-content px-4 py-2 ">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`w-full p-2 text-left border rounded-lg hover:bg-gray-100 ${selectedCategory === category ? 'bg-gray-300' : ''}`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </details>


                {/*  the component is missing the logic to apply facet selections to the API call.
                facet handling with the API is yet to be implemented. */}

                {/* other facets section */}
                {facets.map((facet) => (
                    <div key={facet.identifier} className="mb-2">
                        <details className="collapse">
                            <summary className="bg-base-200 collapse-title px-6">
                                <div className='flex justify-between'>
                                    <span>{facet.displayName}</span>
                                    <span className="self-end">&#x2b;</span>
                                </div>
                            </summary>
                            <div className='collapse-content'>
                                {facet.options.map((option) => (
                                    <div key={option.identifier} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={option.identifier}
                                            name={option.displayValue}
                                            className="mr-2"
                                        />
                                        <label htmlFor={option.identifier}>
                                            {option.displayValue}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterSection;