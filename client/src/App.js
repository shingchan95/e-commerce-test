import './App.css';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import SortSection from './components/SortSection';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import { useState } from 'react';
import useFetchProducts from './hooks/useFetchProducts';

function App() {
  // state variables for product query
  const [query, setQuery] = useState('toilets');
  const [pageNumber, setPageNumber] = useState(1);
  const [size, setSize] = useState(30); // set the size to 30 by default
  const [additionalPages] = useState(0); // variable to add additional page to the query
  const [sort, setSort] = useState(1); // 1= recommended, 2= price low to hight 3= price high to low, 4= largest discount

  const { products, pagination, facets, loading, error } = useFetchProducts({ query, pageNumber, size, additionalPages, sort });

  console.log(pagination)
  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Header />
      <div className='lg:flex flex-1 p-4 md:flex-row'>
        <aside className='lg:w-1/6 h-full p-4 bg-white shadow-md md:w-full'>
          {facets &&
            <FilterSection setQuery={setQuery} facets={facets} />
          }
        </aside>
        <section className='flex-1 ml-4'>
          <SortSection setSort={setSort} />
          {products &&
            <ProductCard products={products} />
          }
          {pagination &&
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} pagination={pagination} size={size} setSize={setSize} />
          }
        </section>
      </div>
    </div>
  );
}

export default App;
