import React from 'react';

function Pagination({ pageNumber, setPageNumber, size, setSize, pagination }) {
    const totalPages = Math.ceil(pagination.total / size);
    const handlePrevious = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }

    };

    const handleNext = () => {
        if (pageNumber < totalPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handleViewMore = () => {
        setSize(size + 10); // Increase size by 10 on each "View More" click
    };

    return (
        <div className="flex items-center justify-center space-x-4 mt-4">
            <button
                onClick={handlePrevious}
                disabled={pageNumber === 1}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
                Previous
            </button>
            <span>Page {pageNumber} of {totalPages}</span>
            <button
                onClick={handleNext}
                disabled={pageNumber === totalPages}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
                Next
            </button>
            <button
                onClick={handleViewMore}
                disabled={size >= pagination.total} // Disable if all items are loaded
                className="px-3 py-1 bg-green-600 rounded text-whit"
            >
                View More
            </button>
        </div>
    );
}

export default Pagination;