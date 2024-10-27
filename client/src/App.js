import './App.css';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import SortSection from './components/SortSection';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import { useState } from 'react';
import useFetchProducts from './hooks/useFetchProducts';

function App() {
  const [query, setQuery] = useState('toilets');
  const [pageNumber, setPageNumber] = useState(1);
  const [size] = useState(0);
  const [additionalPages] = useState(0);
  const [sort, setSort] = useState(1);

  const { products, pagination, facets, oading, error } = useFetchProducts({ query, pageNumber, size, additionalPages, sort });

  console.log(pagination)

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Header />
      <div className='flex flex-1 p-4'>
        <aside className='w-1/4 p-4 bg-white shadow-md'>
          <FilterSection />
        </aside>
        <section className='flex-1 ml-4'>
          <SortSection />
          <ProductCard products={products} />
          <Pagination />
        </section>
      </div>
    </div>
  );
}

export default App;
