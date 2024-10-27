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
            <div className="collapse lg:collapse-open">
                <input type="checkbox" className="peer" />
                <div className="bg-base-200 collapse-title font-semibold text-left cursor-pointer">
                    <h3 className="font-bold">Filter</h3>
                </div>

                <div className="collapse-content">

                    {/* collapsible categories section */}
                    <div className="collapse my-2 collapse-arrow">
                        <input type="checkbox" className="peer" />
                        <div className="bg-base-200 collapse-title px-6 flex justify-between">
                            <span>Categories</span>
                        </div>
                        <div className="collapse-content">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`w-full p-2 my-2 text-left border rounded-lg hover:bg-gray-100 ${selectedCategory === category ? 'bg-gray-300' : ''}`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/*  the component is missing the logic to apply facet selections to the API call.
                facet handling with the API is yet to be implemented. */}

                    {/* other facets section */}
                    {facets.map((facet) => (
                        <div key={facet.identifier} className="collapse collapse-arrow mb-2">
                            <input type="checkbox" className="peer" />
                            <div className='bg-base-200 collapse-title px-6 flex justify-between'>
                                <span>{facet.displayName}</span>
                            </div>
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
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default FilterSection;

