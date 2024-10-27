import { useState, useEffect } from 'react';

const SERVER_API = 'http://localhost:5001'
const useFetchProducts = ({ query, pageNumber, size, additionalPages, sort }) => {
    const [products, setProducts] = useState([]);
    const [facets, setFacets] = useState([]);
    const [pagination, setPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${SERVER_API}/api/test?query=${query}&pageNumber=${pageNumber}&size=${size}&additionalPages=${additionalPages}&sort=${sort}`)
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();

                setProducts(data.products);
                setPagination(data.pagination);
                setFacets(data.facets);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [query, pageNumber, size, sort]);

    return { products, pagination, facets, loading, error };
};

export default useFetchProducts;