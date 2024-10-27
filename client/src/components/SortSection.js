import React from 'react';

function SortSection({ setSort }) {
    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <div className='m-4'>
            <label className='px-2'>
                Sort by:
            </label>
            <select
                onChange={handleSortChange}
                className='p-2'
            >
                <option value='1'>Recommended</option>
                <option value='2'>Price: Low to High</option>
                <option value='3'>Price: High to Low</option>
                <option value='4'>Largest Discount</option>
            </select>
        </div>
    );
}

export default SortSection;