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

  const { products, loading, error } = useFetchProducts({ query, pageNumber, size, additionalPages, sort });

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Header />
      <div className='lg:flex flex-1 p-4 md:flex-row'>
        <aside className='lg:w-1/6 h-full p-4 bg-white shadow-md md:w-full'>
          <FilterSection setQuery={setQuery} />
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
